USE unisnacks;

SELECT
  id AS order_id,
  buyer_name,
  product_name,
  seller_name,
  price,
  pickup_date,
  pickup_time,
  pickup_location,
  contact_platform,
  buyer_note,
  status,
  ordered_at
FROM orders
ORDER BY ordered_at DESC;
