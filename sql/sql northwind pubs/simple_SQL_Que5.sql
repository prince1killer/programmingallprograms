select orderdate from orders where orderid not in (select orderid from "order details" where productid = 1);