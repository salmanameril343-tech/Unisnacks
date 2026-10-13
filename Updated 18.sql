USE unisnacks;

UPDATE orders
SET
  product_name = CASE product_id
    WHEN 1 THEN 'Spicy Pastil'
    WHEN 2 THEN 'Ube Turon'
    WHEN 3 THEN 'Turon Saging'
    WHEN 4 THEN 'Pastil With Boiled Egg'
    WHEN 5 THEN 'Graham Balls'
    WHEN 6 THEN 'Caramelized Toasted Bread'
    WHEN 7 THEN 'Garlic Bread'
    WHEN 8 THEN 'Rice with Fried Shrimp and Fried Siomai'
    WHEN 9 THEN 'Pork Siomai'
    WHEN 10 THEN 'Kwek Kwek'
    WHEN 11 THEN 'Chicken Proven'
    WHEN 12 THEN 'Chicken Skin'
    WHEN 13 THEN 'Gulaman'
    WHEN 14 THEN 'Red Juice'
    ELSE product_name
  END,
  seller_name = CASE product_id
    WHEN 1 THEN 'Boys Braiders Pastil'
    WHEN 2 THEN 'Captain ver.'
    WHEN 3 THEN 'Captain ver.'
    WHEN 4 THEN 'Leicka Pagdanganan'
    WHEN 5 THEN 'Daniela Cassandra Memeje'
    WHEN 6 THEN 'Daniela Cassandra Memeje'
    WHEN 7 THEN 'Daniela Cassandra Memeje'
    WHEN 8 THEN 'Daniela Cassandra Memeje'
    WHEN 9 THEN 'Leicka Pagdanganan'
    WHEN 10 THEN 'Leicka Pagdanganan'
    WHEN 11 THEN 'Leicka Pagdanganan'
    WHEN 12 THEN 'Leicka Pagdanganan'
    WHEN 13 THEN 'Leicka Pagdanganan'
    WHEN 14 THEN 'Leicka Pagdanganan'
    ELSE seller_name
  END,
  price = CASE product_id
    WHEN 1 THEN 15.00
    WHEN 2 THEN 15.00
    WHEN 3 THEN 25.00
    WHEN 4 THEN 40.00
    WHEN 5 THEN 10.00
    WHEN 6 THEN 20.00
    WHEN 7 THEN 25.00
    WHEN 8 THEN 75.00
    WHEN 9 THEN 20.00
    WHEN 10 THEN 20.00
    WHEN 12 THEN 20.00
    WHEN 13 THEN 20.00
    WHEN 14 THEN 20.00
    ELSE price
  END
WHERE product_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

SELECT
  id AS order_id,
  product_id,
  product_name,
  seller_name,
  price,
  buyer_name,
  status,
  ordered_at
FROM orders
ORDER BY id DESC;
