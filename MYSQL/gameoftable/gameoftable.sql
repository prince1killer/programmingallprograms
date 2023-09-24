CREATE TABLE worker(
	id INT unique not null auto_increment,
    worker_id int not null ,
    name VARCHAR(30),
    city VARCHAR(30),
    phone INT
 );