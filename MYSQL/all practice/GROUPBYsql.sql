select count(city) as counting,city
from practice1.employee
group by    city
/*having city="surat"        this is comment*/