CREATE TABLE worker
(
	worker_id INT NOT NULL ,
  username varchar(255) DEFAULT NULL,
  first_name varchar(50) DEFAULT NULL,
  last_name varchar(50) DEFAULT NULL,
  gender varchar(10) DEFAULT NULL,
  password varchar(50) DEFAULT NULL,
  status tinyint DEFAULT NULL,
  PRIMARY KEY (worker_id)
)
