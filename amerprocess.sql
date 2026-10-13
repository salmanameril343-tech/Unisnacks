USE unisnacks;

ALTER TABLE orders
  MODIFY COLUMN status ENUM('preordered', 'checked_in', 'completed', 'cancelled')
  NOT NULL DEFAULT 'preordered';

DESCRIBE orders;
