select name 
from employee1
where city in (select id from city_info where cityname in ("hmt","surat"));
