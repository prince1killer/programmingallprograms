create procedure customer_count
as 
select * from store_procedure  where pincode in (select max(pincode) from store_procedure); 