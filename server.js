const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const mysql = require("mysql2/promise");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "!ameril09623733967",
  database: process.env.DB_NAME || "unisnacks",
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true
});

const products = {
  1: { name: "Spicy Pastil", seller: "Boys Braiders Pastil", price: 15 },
  2: { name: "Ube Turon", seller: "Captain ver.", price: 15 },
  3: { name: "Pastil With Boiled Egg", seller: "Leicka Pagdanganan", price: 40 },
  4: { name: "Graham Ball", seller: "Daniela Cassandra Memeje", price: 10 },
  5: { name: "Caramelized Toast Bread", seller: "Daniela Cassandra Memeje", price: 20 },
  6: { name: "Garlic Bread", seller: "Daniela Cassandra Memeje", price: 25},
  7: { name: "Rice with Fried Shrimp and Fried Siomai", seller: "Daniela Cassandra Memeje", price: 75},
  8: { name: "Pork Siomai", seller: "Daniela Cassandra Memeje", price: 20},
  9: { name: "Kwek Kwek", seller: "leicka Pagdanganan", price: 20},
  10: { name: "Chicken Proven", seller: "leicka Pagdanganan", price: 20},
  11: { name: "chicken skin", seller: "leicka Pagdanganan", price: 20},
  12: { name: "Gulaman", seller: "leicka Pagdanganan", price: 20},
  13: { name: "Red juice", seller: "leicka Pagdanganan", price: 20},
};

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS"
  });
  response.end(JSON.stringify(payload));
}

function parseBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 100000) request.destroy();
    });
    request.on("end", () => {
      try { resolve(raw ? JSON.parse(raw) : {}); }
      catch { reject(new Error("Request body must be valid JSON.")); }
    });
    request.on("error", reject);
  });
}

function requiredString(value, field, max = 500) {
  if (typeof value !== "string" || !value.trim() || value.length > max) {
    throw new Error(`${field} is required.`);
  }
  return value.trim();
}

function validateOrder(body) {
  const productId = Number(body.product_id);
  const product = products[productId];
  if (!product) throw new Error("Invalid product.");
  const platform = body.contact_platform;
  if (!["messenger", "instagram"].includes(platform)) throw new Error("Contact platform must be messenger or instagram.");
  const pickupDate = requiredString(body.pickup_date, "Pickup date", 10);
  const pickupTime = requiredString(body.pickup_time, "Pickup time", 8);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(pickupDate) || !/^\d{2}:\d{2}/.test(pickupTime)) throw new Error("Invalid pickup date or time.");
  return {
    buyerName: requiredString(body.buyer_name, "Buyer name", 120),
    productId,
    product,
    pickupDate,
    pickupTime,
    pickupLocation: requiredString(body.pickup_location, "Pickup location", 160),
    contactPlatform: platform,
    buyerNote: typeof body.buyer_note === "string" ? body.buyer_note.trim().slice(0, 2000) : ""
  };
}

async function createOrder(body) {
  const data = validateOrder(body);
  const [result] = await pool.execute(
    `INSERT INTO orders
      (buyer_name, product_id, product_name, seller_name, price, pickup_date, pickup_time, pickup_location, contact_platform, buyer_note)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [data.buyerName, data.productId, data.product.name, data.product.seller, data.product.price, data.pickupDate, data.pickupTime, data.pickupLocation, data.contactPlatform, data.buyerNote]
  );
  const [rows] = await pool.execute("SELECT * FROM orders WHERE id = ?", [result.insertId]);
  return rows[0];
}

async function updateOrderStatus(id, action) {
  if (!/^\d+$/.test(id)) throw new Error("Invalid order ID.");
  const field = action === "check-in" ? "checked_in_at" : "checked_out_at";
  const status = action === "check-in" ? "checked_in" : "completed";
  const [result] = await pool.execute(
    `UPDATE orders SET ${field} = COALESCE(${field}, CURRENT_TIMESTAMP), status = ? WHERE id = ?`,
    [status, Number(id)]
  );
  if (!result.affectedRows) return null;
  if (action === "check-out") {
    await pool.execute(
      `UPDATE orders SET time_spent_seconds = CASE WHEN checked_in_at IS NULL THEN NULL ELSE TIMESTAMPDIFF(SECOND, checked_in_at, checked_out_at) END WHERE id = ?`,
      [Number(id)]
    );
  }
  const [rows] = await pool.execute("SELECT * FROM orders WHERE id = ?", [Number(id)]);
  return rows[0];
}

async function handleApi(request, response, pathname) {
  try {
    if (request.method === "GET" && pathname === "/api/health") {
      await pool.query("SELECT 1");
      return sendJson(response, 200, { ok: true, database: "connected" });
    }
    if (request.method === "POST" && pathname === "/api/orders") {
      return sendJson(response, 201, { ok: true, order: await createOrder(await parseBody(request)) });
    }
    const statusMatch = pathname.match(/^\/api\/orders\/(\d+)\/(check-in|check-out)$/);
    if (request.method === "PATCH" && statusMatch) {
      const order = await updateOrderStatus(statusMatch[1], statusMatch[2]);
      if (!order) return sendJson(response, 404, { ok: false, error: "Order not found." });
      return sendJson(response, 200, { ok: true, order });
    }
    return sendJson(response, 404, { ok: false, error: "API route not found." });
  } catch (error) {
    console.error(error);
    return sendJson(response, error.message.includes("required") || error.message.includes("Invalid") ? 400 : 500, { ok: false, error: error.message });
  }
}

function serveStatic(request, response, pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return sendJson(response, 400, { error: "Invalid file path." });
  }
  const requested = decodedPath === "/" ? "/index.html" : decodedPath;
  const filePath = path.resolve(ROOT, `.${requested}`);
  if (!filePath.startsWith(ROOT)) return sendJson(response, 403, { error: "Forbidden" });
  fs.readFile(filePath, (error, content) => {
    if (error) return sendJson(response, 404, { error: "File not found" });
    const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png" };
    response.writeHead(200, { "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream" });
    response.end(content);
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  if (request.method === "OPTIONS") return sendJson(response, 204, {});
  if (url.pathname.startsWith("/api/")) return handleApi(request, response, url.pathname);
  serveStatic(request, response, url.pathname);
});

server.listen(PORT, "0.0.0.0", () => console.log(`UniSnacks server running at http://localhost:${PORT}`));
