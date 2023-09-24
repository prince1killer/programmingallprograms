def addition(a , b):
    print(a+b)

def sum(a,b):
    mean = (a*b)/(a+b)
    return mean

def primeNum(a,b):
    x =a
    print("Prime Number")
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

def fibenacci(a):
    t1 =0
    t2 =1
    print("Fibanacci series")
    print(t1)
    print(t2)
    for x in range(1,a+1):
        t3 = t1 + t2
        t1 =t2
        print(t3)
        t2 =  t3

def factorial(a):
    sum = 0
    # print("factorial =",end="")
    for x in range(1,a+1):
        sum = sum + x
        # print(sum, end=",")
    # print("=",sum)
    return sum

def nCr(a,b):
    if a > b:
        ans = factorial(a)/(factorial(a-b)*factorial(b))
    else:
       ans = factorial(a)/(factorial(b-a)*factorial(b))
    return ans

print("1 addition")
print("2 sum")
print("3 prime")
print("4 fibanacci")
print("5 factorial")
print("6 nCr(binary)\n")

a = int(input("enter your choice ="))
x = int(input("Enter your value 1 ="))
y = int(input("Enter your value 2 ="))
print()
if a == 1:
    addition(x,y)
elif a == 2:
    res = sum(x,y)
    print("mean =",res)
elif a == 3:
    primeNum(x,y)
elif a == 4:
    fibenacci(y)
elif a == 5:
    factorial(y)
elif a == 6:
    nCr = nCr(x,y)
    print("nCr =",nCr)