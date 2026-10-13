const products = [
  { id: 1, name: "Spicy Pastil", seller: "Boys Braiders Pastil", category: "meals", price: 15, image: "pastil spicy.jpg", description: "Tender chicken Adobo, steamed rice, and Spicy.", location: "Red bench", available: true, accent: "🍱", messenger: "https://www.messenger.com/t/948244231711029", instagram: "" },
  { id: 2, name: "Ube Turon", seller: "Captain ver.", category: "snacks", price: 15, image: "Ube Turon.jpeg", description: "Ube Flavor", location: "Red bench", available: true, accent: "🥖", messenger: "https://www.facebook.com/messages/t/395436466979820", instagram: "https://www.instagram.com/direct/t/17844291560545775/" },
  { id: 3, name: "Turon Saging", seller: "Captain ver.", category: "snacks", price: 25, image: "Turon sagin.jpg", description: "Mainit-init pa na saging", location: "Red bench", available:true, accent: "🥖", messenger: "https://www.facebook.com/messages/t/395436466979820", instagram: "https://www.instagram.com/direct/t/17844291560545775/" },
  { id: 4, name: "Pastil With Boiled Egg", seller: "Leicka Pagdanganan", category: "meals", price: 40, image: "Pastil with egg.jpg", description: "Tender shredded chicken with chili oil & soy sauce, served with steamed rice and boiled egg. Busog-sarap, malinamnam, and freshly made daily.", Location: "Red bench", available: true, accent: "🍛", messenger: "https://www.facebook.com/messages/e2ee/t/2204311573759302", instagram: "",},
  { id: 5, name: "Graham Balls", seller: "Daniela Cassandra Memeje", category: "dessert", price: 10, image: "Graham balls.jpg", description: "Sweet and soft graham balls made with crushed graham crackers and a creamy filling, coated in graham crumbs for a delightful treat", Location: "Red bench", available: true, accent: "🍫", messenger: "https://www.facebook.com/messages/e2ee/t/1369797438593021", instagram: "https://instagram.com/cas.starz?psln=MXJybng3OXV1dGV3MA%3D%3D",},
  { id: 6, name: "Caramelized Toast Bread", seller: "Daniela Cassandra Memeje", category: "snacks", price: 20, image: "Toasted brid.jpg", description: "Golden toasted bread coated with sweet caramelized sugar, offering a crunchy texture and delicious sweetness in every bite.", Location: "Red bench", available: true, accent:"🍞", messenger: "https://www.facebook.com/messages/e2ee/t/1369797438593021", instagram: "https://instagram.com/cas.starz?psln=MXJybng3OXV1dGV3MA%3D%3D",},
  { id: 7, name: "Garlic Bread", seller: "Daniela Cassandra Memeje", category: "snacks", price: 25, image: "garlic brid.jpg", description: "Crispy and flavorful bread infused with buttery garlic goodness, perfect as a snack or side dish.", Location: "Red bench", available: true, accent:"🥖", messenger: "https://www.facebook.com/messages/e2ee/t/1369797438593021", instagram: "https://instagram.com/cas.starz?psln=MXJybng3OXV1dGV3MA%3D%3D",},
  { id: 8, name: "Rice with Fried Shrimp and Fried Siomai", seller: "Daniela Cassandra Memeje", category: "meals", price: 75, image: "garlic shremp.jpg", description: "A satisfying rice meal served with crispy fried shrimp and delicious fried siomai, perfect for lunch or a quick meal.", Location: "Red bench", available: true, accent:"🍤", messenger: "https://www.facebook.com/messages/e2ee/t/1369797438593021", instagram: "https://instagram.com/cas.starz?psln=MXJybng3OXV1dGV3MA%3D%3D",},
  { id: 9, name: "Pork Siomai (5 Each)", seller: "Leicka Pagdanganan", category: "snacks", price: 20, image: "Siomai.jpg", description: "Juicy and flavorful Pork Siomai topped with our signature spicy chili garlic sauce, served with soy sauce and kalamansi. Made fresh, malinamnam, and perfect pang-meryenda or ulam.", Location: "Red bench", available: true, accent:"🥟", messenger: "https://www.facebook.com/messages/e2ee/t/2204311573759302", instagram: "",},
  { id: 10, name: "Kwek Kwek", seller: "Leicka Pagdanganan", category: "snacks", price: 20, image: "Kwek.jpg", description: "Crispy orange-battered quail eggs served in a cup with sweet spicy sauce and bamboo stick. Freshly fried, crunchy outside and soft inside. Perfect pang-meryenda.", Location: "Red bench", available: true, accent:"🥚", messenger: "https://www.facebook.com/messages/e2ee/t/2204311573759302", instagram: "",},
  { id: 11, name: "Chicken Proven", seller: "Leicka Pagdanganan", category: "snacks", price: 20, image: "chicken skin.jpg", description: "Crispy deep-fried chicken proven on a stick with 4 pieces per stick. Golden brown, crunchy and flavorful. Freshly cooked, perfect pang-meryenda.", Location: "Red bench", available: true, accent:"🍗", messenger: "https://www.facebook.com/messages/e2ee/t/2204311573759302", instagram: "",},
  { id: 12, name: "Chicken Skin", seller: "Leicka Pagdanganan", category: "snacks", price: 20, image: "chicken sken.jpg", description:"Crispy deep-fried chicken skin served in a clear plastic cup. Golden brown, crunchy, and flavorful. Freshly cooked, perfect pang-meryenda.", Location: "Red bench", available: true, accent:"🍗", messenger: "https://www.facebook.com/messages/e2ee/t/2204311573759302", instagram: "",},
  { id: 13, name: "Gulaman", seller: "Leicka Pagdanganan", category: "drinks", price: 20, image: "gulaman.jpg", description: "Refreshing Filipino iced brown sugar gulaman drink. Served cold in a 16oz / 480ml clear cup with lots of ice. Sweet, cool, and perfect pang-merienda.", Location: "Red bench", available: true, accent:"🥤", messenger: "https://www.facebook.com/messages/e2ee/t/2204311573759302", instagram: "",},
  { id: 14, name: "Red Juice", seller: "Leicka Pagdanganan", category: "drinks", price: 20, image: "red juice.jpg", description: "Refreshing iced red powdered juice drink served cold in a 16oz / 480ml clear cup. Sweet, fruity, with lots of ice. Perfect pampalamig.", Location: "Red bench", available: true, accent:"🥤", messenger: "https://www.facebook.com/messages/e2ee/t/2204311573759302", instagram: "",},
];

const API_BASE_URL = window.UNISNACKS_API_BASE_URL || "";

const starterComments = {
  1: [
    { name: "Alyssa", text: "Pwede patikim!", date: "2 days ago" },
    { name: "Ken", text: "Miss ko na sha.", date: "1 week ago" }
  ],
  2: [{ name: "Bea", text: "Babalik ako dito sarap.", date: "3 days ago" },
      { name: "Lea Salonga", text: "Sarap naman yan yah pero mas masarap ka.", date: "1 days ago" }
    ],
  3: [{ name: "Liam", text: "grabe solid at ang haba ng saging ver!!.", date: "5 days ago" }],
  4: [],
  5: [{ name: "Nica", text: "yummy delisyoso.", date: "1 day ago" }],
  6: []
};


const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const productGrid = $("#productGrid");
const emptyState = $("#emptyState");
let selectedCategory = "all";
let selectedProduct = null;
let pendingOrderData = null;

function peso(value) { return `₱${value.toFixed(2)}`; }

function renderProducts() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const visible = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesQuery = !query || [product.name, product.seller, product.description, product.category].join(" ").toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card ${product.available ? "" : "sold-out"}">
      <div class="product-image"><img src="${product.image}" alt="${product.name}" /><span class="product-emoji">${product.accent}</span><span class="availability ${product.available ? "is-available" : "is-unavailable"}">${product.available ? "Available" : "Sold out"}</span></div>
      <div class="product-content"><div class="product-meta"><span>${product.category}</span><span>·</span><span>${product.location}</span></div><h3>${product.name}</h3><p>${product.description}</p><div class="seller-line"><span class="mini-avatar">${product.seller.charAt(0)}</span><span>by <strong>${product.seller}</strong></span></div><div class="product-footer"><strong class="product-price">${peso(product.price)}</strong><button class="small-button" data-order="${product.id}" ${product.available ? "" : "disabled"}>${product.available ? "Pre-order" : "Unavailable"}</button></div></div>
    </article>`).join("");

  emptyState.hidden = visible.length > 0;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[character]));
}

function getComments(productId) {
  const saved = JSON.parse(localStorage.getItem("unisnacks-comments") || "{}");
  return [
    ...(starterComments[productId] || []).map((comment) => ({ ...comment, saved: false })),
    ...(saved[productId] || []).map((comment, index) => ({ ...comment, saved: true, savedIndex: index }))
  ];
}

function formatCommentDate(comment) {
  if (!comment.createdAt) return comment.date || "Previously";

  const postedAt = new Date(comment.createdAt);
  const elapsedSeconds = Math.max(0, Math.floor((Date.now() - postedAt.getTime()) / 1000));
  let relative = "Just now";
  if (elapsedSeconds >= 86400) relative = `${Math.floor(elapsedSeconds / 86400)} day${Math.floor(elapsedSeconds / 86400) === 1 ? "" : "s"} ago`;
  else if (elapsedSeconds >= 3600) relative = `${Math.floor(elapsedSeconds / 3600)} hour${Math.floor(elapsedSeconds / 3600) === 1 ? "" : "s"} ago`;
  else if (elapsedSeconds >= 60) relative = `${Math.floor(elapsedSeconds / 60)} minute${Math.floor(elapsedSeconds / 60) === 1 ? "" : "s"} ago`;

  const exact = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(postedAt);
  return `${exact} · ${relative}`;
}

function renderComments(productId) {
  const comments = getComments(productId);
  $("#commentCount").textContent = `${comments.length} comment${comments.length === 1 ? "" : "s"}`;

  $("#commentsList").innerHTML = comments.length
    ? comments.map((comment) => `
        <article class="comment-item">
          <span class="comment-avatar">${escapeHTML(comment.name.charAt(0).toUpperCase())}</span>
          <div class="comment-body"><strong>${escapeHTML(comment.name)}</strong><span class="comment-date">${escapeHTML(formatCommentDate(comment))}</span><p>${escapeHTML(comment.text)}</p>${comment.saved ? `<button class="delete-comment" type="button" data-delete-comment="${comment.savedIndex}">Delete</button>` : ""}</div>
        </article>`).join("")
    : `<p class="no-comments">No comments yet. Be the first to share your experience!</p>`;
}

function openDetails(product) {
  selectedProduct = product;
  $("#detailsImage").src = product.image;
  $("#detailsImage").alt = product.name;
  $("#detailsTitle").textContent = product.name;
  $("#detailsDescription").textContent = product.description;
  $("#detailsSeller").textContent = `Sold by ${product.seller} · Pickup at ${product.location}`;
  $("#detailsPrice").textContent = peso(product.price);
  $("#commentForm").reset();
  renderComments(product.id);
  $("#detailsModal").hidden = false;
  document.body.classList.add("modal-open");
}

function deleteComment(productId, savedIndex) {
  const saved = JSON.parse(localStorage.getItem("unisnacks-comments") || "{}");
  if (!saved[productId]) return;
  saved[productId].splice(savedIndex, 1);
  localStorage.setItem("unisnacks-comments", JSON.stringify(saved));
  renderComments(productId);
  showToast("Your comment was deleted.");
}

function openOrder(product) {
  selectedProduct = product;
  const form = $("#orderForm");
  form.reset();
  pendingOrderData = null;
  $("#orderReceipt").hidden = true;
  $("#submitOrder").disabled = true;
  $("#submitOrder").classList.add("submit-order-disabled");
  form.hidden = false;
  $("[name=product]", form).value = product.name;
  $("#modalProduct").textContent = `${product.name} · ${peso(product.price)} · Pickup at ${product.location}`;
  const date = new Date();
  date.setDate(date.getDate() + 1);
  $("[name=date]", form).min = date.toISOString().split("T")[0];
  $("#orderModal").hidden = false;
  document.body.classList.add("modal-open");
  $("[name=name]", form).focus();
}

function closeModal(modal) {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function formatSavedOrderTime(value) {
  if (!value) return "Just now";
  const parsed = new Date(String(value).replace(" ", "T"));
  return Number.isNaN(parsed.getTime()) ? String(value) : new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(parsed);
}

function showSavedReceipt(order) {
  const platform = order.contact_platform === "instagram" ? "Instagram" : "Messenger";
  $("#successReceiptDetails").innerHTML = `
    <div class="saved-order-id">Order #${escapeHTML(order.id)}</div>
    <div><span>Food</span><strong>${escapeHTML(order.product_name)}</strong></div>
    <div><span>Price</span><strong>${peso(Number(order.price))}</strong></div>
    <div><span>Buyer</span><strong>${escapeHTML(order.buyer_name)}</strong></div>
    <div><span>Pickup</span><strong>${escapeHTML(order.pickup_date)} at ${escapeHTML(order.pickup_time)}</strong></div>
    <div><span>Location</span><strong>${escapeHTML(order.pickup_location)}</strong></div>
    <div><span>Contact</span><strong>${platform}</strong></div>
    <div><span>Status</span><strong class="saved-status">${escapeHTML(order.status)}</strong></div>
    <div><span>Ordered at</span><strong>${escapeHTML(formatSavedOrderTime(order.ordered_at))}</strong></div>`;
  $("#successReceiptModal").hidden = false;
  document.body.classList.add("modal-open");
}

function buildOrderMessage(data, orderId) {
  return `Hi! I'd like to pre-order ${data.product}.\nUniSnacks order ID: #${orderId}\nName: ${data.name}\nPickup: ${data.date} at ${data.time}\nLocation: ${data.location}\nNote: ${data.note || "None"}\n\nPlease confirm availability and the final total. Thank you!`;
}

function getSellerContactLink(product, platform, message) {
  const page = platform === "instagram" ? product.instagram : product.messenger;
  if (!page || page.startsWith("PASTE_")) {
    return platform === "instagram" ? "https://www.instagram.com/direct/new/" : "https://m.me/";
  }

  return page;
}

$("#searchInput").addEventListener("input", renderProducts);
$$('.category-tab').forEach((tab) => tab.addEventListener("click", () => {
  $$('.category-tab').forEach((item) => item.classList.remove("active"));
  tab.classList.add("active");
  selectedCategory = tab.dataset.category;
  renderProducts();
}));

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-order]");
  if (button) {
    const product = products.find((item) => item.id === Number(button.dataset.order));
    if (product) openOrder(product);
    return;
  }

  const card = event.target.closest(".product-card");
  if (card) {
    const product = products.find((item) => item.name === card.querySelector("h3").textContent);
    if (product) openDetails(product);
  }
});

$("#commentsList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-comment]");
  if (!button || !selectedProduct) return;
  deleteComment(selectedProduct.id, Number(button.dataset.deleteComment));
});

$("#closeModal").addEventListener("click", () => closeModal($("#orderModal")));
$("#closeSuccessReceipt").addEventListener("click", () => closeModal($("#successReceiptModal")));
$("#closeSuccessReceiptAction").addEventListener("click", () => closeModal($("#successReceiptModal")));
$("#printReceipt").addEventListener("click", () => window.print());
$$('.close-details').forEach((button) => button.addEventListener("click", () => closeModal($("#detailsModal"))));
$("#openInquiry").addEventListener("click", () => {
  $("#inquiryModal").hidden = false;
  document.body.classList.add("modal-open");
  $("#inquiryForm [name=name]").focus();
});
$$('.close-inquiry').forEach((button) => button.addEventListener("click", () => closeModal($("#inquiryModal"))));
$$('.modal-backdrop').forEach((backdrop) => backdrop.addEventListener("click", (event) => { if (event.target === backdrop) closeModal(backdrop); }));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") $$('.modal-backdrop:not([hidden])').forEach(closeModal); });

$("#orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  pendingOrderData = data;
  $("#receiptDetails").innerHTML = `
    <div><span>Food</span><strong>${escapeHTML(selectedProduct.name)}</strong></div>
    <div><span>Price</span><strong>${peso(selectedProduct.price)}</strong></div>
    <div><span>Buyer</span><strong>${escapeHTML(data.name)}</strong></div>
    <div><span>Pickup</span><strong>${escapeHTML(data.date)} at ${escapeHTML(data.time)}</strong></div>
    <div><span>Location</span><strong>${escapeHTML(data.location)}</strong></div>
    <div><span>Contact</span><strong>${data.platform === "instagram" ? "Instagram" : "Messenger"}</strong></div>
    <div><span>Note</span><strong>${escapeHTML(data.note || "None")}</strong></div>`;
  $("#orderForm").hidden = true;
  $("#orderReceipt").hidden = false;
});

$("#cancelOrder").addEventListener("click", () => {
  pendingOrderData = null;
  $("#orderForm").reset();
  $("#orderReceipt").hidden = true;
  $("#orderForm").hidden = false;
  showToast("Order cancelled. It was not saved.");
});

$("#copyReceipt").addEventListener("click", async () => {
  if (!pendingOrderData || !selectedProduct) return;
  const receiptText = buildOrderMessage(pendingOrderData, "pending");
  try {
    await navigator.clipboard.writeText(receiptText);
    $("#submitOrder").disabled = false;
    $("#submitOrder").classList.remove("submit-order-disabled");
    showToast("Receipt copied. Submit the order, then paste it into Messenger.");
  } catch {
    showToast("Copy was blocked by the browser. Select the receipt details and copy them manually.");
  }
});

$("#submitOrder").addEventListener("click", async () => {
  if (!pendingOrderData || !selectedProduct) return;
  const data = pendingOrderData;
  const orderPayload = {
    buyer_name: data.name,
    product_id: selectedProduct.id,
    pickup_date: data.date,
    pickup_time: data.time,
    pickup_location: data.location,
    contact_platform: data.platform,
    buyer_note: data.note
  };

  let savedOrder;
  try {
    const response = await fetch(`${API_BASE_URL}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPayload)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Could not save the order.");
    savedOrder = result.order;
    localStorage.setItem("unisnacks-last-order-id", String(savedOrder.id));
  } catch (error) {
    showToast(`Order was not saved: ${error.message}. Start the server and try again.`);
    return;
  }

  const plainMessage = buildOrderMessage(data, savedOrder.id);
  const message = encodeURIComponent(plainMessage);
  const sellerLink = getSellerContactLink(selectedProduct, data.platform, message);
  const sellerWindow = window.open(sellerLink, "_blank", "noopener");
  try {
    await navigator.clipboard.writeText(plainMessage);
  } catch {

  }
  pendingOrderData = null;
  closeModal($("#orderModal"));
  showSavedReceipt(savedOrder);
  showToast(`Order #${savedOrder.id} saved. Receipt copied—paste it into ${data.platform === "instagram" ? "Instagram" : "Messenger"}.`);
  if (!sellerWindow) showToast("Your browser blocked the seller page. Please allow pop-ups and try again.");
});

$("#trackingForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = event.submitter;
  const orderId = new FormData(event.currentTarget).get("orderId");
  const action = button.dataset.action;
  const status = $("#trackingStatus");
  status.textContent = "Saving...";

  try {
    const response = await fetch(`${API_BASE_URL}/api/orders/${orderId}/${action}`, { method: "PATCH" });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Could not update this order.");
    const order = result.order;
    updateTransactionProgress(order.status);
    const duration = order.time_spent_seconds == null ? "" : ` Time spent: ${Math.floor(order.time_spent_seconds / 60)}m ${order.time_spent_seconds % 60}s.`;
    status.textContent = `Order #${order.id} is ${order.status}.${duration}`;
    showToast(status.textContent);
  } catch (error) {
    status.textContent = error.message;
    showToast(error.message);
  }
});

function updateTransactionProgress(status) {
  const currentStatus = status === "completed" ? "completed" : status === "checked_in" ? "checked_in" : "preordered";
  const steps = ["preordered", "checked_in", "completed"];
  const currentIndex = steps.indexOf(currentStatus);
  $$('[data-progress]').forEach((step) => {
    const index = steps.indexOf(step.dataset.progress);
    step.classList.toggle("is-complete", index < currentIndex);
    step.classList.toggle("is-current", index === currentIndex);
  });
  $$('.progress-line').forEach((line, index) => line.classList.toggle("is-complete", index < currentIndex));
}

$("#inquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const message = encodeURIComponent(`Hi! I'm ${data.name}. I have a question about UniSnacks: ${data.question}`);
  closeModal($("#inquiryModal"));
  window.open(`https://www.facebook.com/messages/t/1384516251403335${message}`, "_blank", "noopener");
});

$("#commentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedProduct) return;

  const data = Object.fromEntries(new FormData(event.currentTarget));
  const saved = JSON.parse(localStorage.getItem("unisnacks-comments") || "{}");
  saved[selectedProduct.id] = saved[selectedProduct.id] || [];
  saved[selectedProduct.id].unshift({
    name: data.name,
    text: data.comment,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem("unisnacks-comments", JSON.stringify(saved));
  event.currentTarget.reset();
  renderComments(selectedProduct.id);
  showToast("Your comment was added to this food item.");
});

$("#feedbackForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const feedback = JSON.parse(localStorage.getItem("unisnacks-feedback") || "[]");
  feedback.push({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem("unisnacks-feedback", JSON.stringify(feedback));
  event.currentTarget.reset();
  showToast("Thanks! Your feedback has been saved on this device.");
});

renderProducts();