CREATE TABLE customer
(
  customer_id INT NOT NULL PRIMARY KEY,
  cname varchar(255) DEFAULT NULL,
  first_name varchar(50) DEFAULT NULL,
  last_name varchar(50) DEFAULT NULL,
  gender varchar(10) DEFAULT NULL,
  password varchar(50) DEFAULT NULL,
  w_num int not null identity(1,1),
)
