CREATE TABLE orders (
	id int not null unique auto_increment,
    order_id int not null,
    wname varchar(30),
    cname varchar(30),
    primary key(order_id)
);