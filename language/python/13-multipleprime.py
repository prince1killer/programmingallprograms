a = int(input("Enter the value 1 ="))
b = int(input("Enter the value 2 ="))
for x in range(a,b+1):
    z=0
    for j in range(2,x):
        if x%j == 0:
            z= z + 1
    if z==0:
        print(x)