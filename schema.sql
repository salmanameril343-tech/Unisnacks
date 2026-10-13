CREATE DATABASE IF NOT EXISTS unisnacks
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE unisnacks;

CREATE TABLE IF NOT EXISTS orders (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  buyer_name VARCHAR(120) NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  product_name VARCHAR(160) NOT NULL,
  seller_name VARCHAR(120) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  pickup_date DATE NOT NULL,
  pickup_time TIME NOT NULL,
  pickup_location VARCHAR(160) NOT NULL,
  contact_platform ENUM('messenger', 'instagram') NOT NULL,
  buyer_note TEXT NULL,
  status ENUM('preordered', 'checked_in', 'completed', 'cancelled') NOT NULL DEFAULT 'preordered',
  ordered_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  checked_in_at DATETIME NULL,
  checked_out_at DATETIME NULL,
  time_spent_seconds INT UNSIGNED NULL,
  PRIMARY KEY (id),
  INDEX idx_orders_status (status),
  INDEX idx_orders_ordered_at (ordered_at),
  INDEX idx_orders_pickup_date (pickup_date)
) ENGINE=InnoDB;

CREATE OR REPLACE VIEW order_time_report AS
SELECT
  id,
  buyer_name,
  product_name,
  seller_name,
  price,
  pickup_date,
  pickup_time,
  pickup_location,
  contact_platform,
  status,
  ordered_at,
  checked_in_at,
  checked_out_at,
  time_spent_seconds,
  CASE
    WHEN time_spent_seconds IS NULL THEN NULL
    ELSE CONCAT(
      FLOOR(time_spent_seconds / 3600), 'h ',
      FLOOR(MOD(time_spent_seconds, 3600) / 60), 'm ',
      MOD(time_spent_seconds, 60), 's'
    )
  END AS time_spent
FROM orders;
