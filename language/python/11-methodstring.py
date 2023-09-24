#string are immutable hence we cannot change the string but it will create new string
a = "Pranav"
b = "!!!Pranav!!!!!!!!!!!!!!!!"
c = "!!Pranav!! !!!!!! !!Kumar!!"
d = "Pranav,Kumar,Pranav"
e = "prAnav"
f = "welcome to java"
g = "i love the pikachu the most"
print(len(a));
print("upper= ",a.upper());
print("lower= ",a.lower())
print("rstrip= ",b.rstrip("!"));
print("lstrip=",b.lstrip("!"));
print(b);
print("rstrip,lstrip= ",b.rstrip("!").lstrip("!"));
print("rstrip,lstrip,replace= ",b.rstrip("!").lstrip("!").replace("Pranav","Pranav Kumar"));
print("splice= ",c.split(" "));
print("splice= ",d.split(","));
#capitalize method  will  tern over first char into uppercase and rest of other will tern into lower();
print("capitalize =",e.capitalize());
print(f.center(100));
print("Endswith= ",b.endswith("!!!"))
print("endswith= ",b.endswith("!!!",6,9))
print("find = ",g.find("most"));
print("find = ",g.find("moste"));
# here index method is similar to the find method but find method return -1 if not match  and index method gives error
print("index = ",g.index("most"))
# print("index = ",g.index("most1"))
print("isalnum= ",a.isalnum());#If there is any  another then alphabet and number it take false
print(a.isalpha())# if all number are in alphabet the its true
print(b.isascii())#
print(c.isdecimal())
print(b.isidentifier())
print(b.islower())
print(b.isupper())
print(c.isspace())
