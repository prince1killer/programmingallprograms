select e.id,e.name,e.selary,c.cityname from employee1 e
inner join city_info c
on e.id = c.id; 