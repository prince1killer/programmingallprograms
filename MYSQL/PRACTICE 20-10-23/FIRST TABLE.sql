use practice;
create table student (
 rollno int primary key,
 name varchar(50),
 marks int not null,
 gread varchar(1),
 city varchar(50)
);

INSERT INTO STUDENT (ROLLNO,NAME, MARKS,GREAD,CITY) VALUES
(101, 'ANIL', 78,'C','PUNE'),
(102, 'BHUMIKA', 93,'A','MUMBAI'),
(103, 'CHETAN', 85,'B','MUMBAI'),
(104,'DHRUV', 96,'A','DELHI'),
(105, 'EMANULE', 12, 'F','DELHI'),
(106, 'FARAN', 82, 'B','DELHI');

	