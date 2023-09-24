/*
 primary key and foreign key
 NOTE
 unique and primary kry have same work but main difference is unique can store null value but primary not
 and one more thing promary key only contain one in table
*/
create table city_info(
	id int not null auto_increment,
    cityname varchar(20),
    primary key(id)
);