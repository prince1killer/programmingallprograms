USE HNGUQUE;
create table CUSTOMER  (
  cnum int primary key,
  CNAME VARCHAR(50),
  CITY VARCHAR(50),
  RATING INT,
  SNUM INT,
  FOREIGN KEY (SNUM) REFERENCES SALESMAN(SNUM)  
);

INSERT INTO CUSTOMER (CNUM, CNAME, CITY, RATING, SNUM) VALUES
(2001, 'HARDIK', 'LONDON', 100, 1001),
(2002, 'GITA', 'ROME', 200, 1003),
(2003, 'LAXMI', 'SURAT', 200, 1002),
(2004, 'GOVIND', 'BOMBAY', 300, 1002),
(2005, 'CHANDRESH', 'LONDON', 100, 1001),
(2006, 'CHAMPAK', 'SURAT', 300, 1007),
(2007, 'PRATIK', 'ROME', 100, 1004),
(2008, 'MANOJ', 'LONDON', 200, 1007);
