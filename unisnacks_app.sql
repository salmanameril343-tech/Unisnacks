CREATE USER IF NOT EXISTS 'unisnacks_app'@'localhost'
IDENTIFIED BY '!ameril09623733967';


GRANT SELECT, INSERT, UPDATE, DELETE
ON unisnacks.products TO 'unisnacks_app'@'localhost';

GRANT SELECT, INSERT, UPDATE, DELETE
ON unisnacks.orders TO 'unisnacks_app'@'localhost';

GRANT SELECT, INSERT, UPDATE, DELETE
ON unisnacks.order_items TO 'unisnacks_app'@'localhost';
