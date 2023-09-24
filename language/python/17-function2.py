def sumNatural(a):
    sum = 0 
    for x in  range(1,a+1):
        sum = sum + x
    return sum


print("1 sum of all natural number ")
a = int(input("Enter the value ="))
if a == 1:
    x = int(input("Enter the number ="))
    print("sum =",sumNatural(x))
elif a == 2:
    pass