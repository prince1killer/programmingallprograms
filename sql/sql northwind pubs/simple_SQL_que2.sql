select p.productname,ord.quantity from products p join "order details" ord on ord.productid = p.productid;