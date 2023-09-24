a = int(input("Enter the value 1 = "))
b = int(input("Enter the value 2 = "))
x = a
while(x<=b):
    i=2
    temp = 0
    while(i<x):
        if x%i == 0:
            temp = temp + 1
        i = i + 1    
    if temp == 0:
        print(x)
    x = x + 1         

# // prime number for one count

# a = int(input("Enter the value 1 ="))
# temp =0 
# for x in range(2,a):
#     if(a%x == 0):
#         temp = 1
# if temp == 0:
#     print(a," is prime")
# else:
#     print(a ,"is not prime")