select orderid,employeeid,orderdate from orders where orderid in (select orderid from "order details" where productid =1)