def rectangle(a,b):
    return a*b;

def greeting(name, age):
    print("you are very telented ",name," at the age of ",age," you achive lot of success")

def evenodd(a):
    if a%2 == 0:
        print("this is even number",a)
    elif a%2 == 0:
        print("this is odd number",a)

def maxmin(value,a):
    max=0 
    min=value[0]
    for x in range(0,a+1):
        if value[x] > max:
            max = value[x]
        elif value[x] < min:
            min = value[x]
    print("Max value is =",max)
    print("Min value is =",min)


def compoundIntrest(p,i,t):
    r = p*((1+i/100)**t)-p
    return r

def dayCal(day):
    year = day//365
    month = (day%365)//30
    days = (day%365)%30
    print("year=",year)
    print("month=",month)
    print("days=",days)

def sumPositi(list1,a):
    sum = 0
    for x in range(0,a+1):
        if(list1[x] > 0):
            sum = sum + list1[x]
    return sum    
def countWord(set1):
    s,c=0,0

    for x in range(0,len(set1)):
        c = c + 1
        if set1[x] == " ":
            s = s + 1
    return c - s


print("1) Area or rectangle")
print("2) Grating message")
print("3) even odd")
print("4) Maximim minimum")
print("5) Compound Intrest")
print("6) Day to Year,month,days")
print("7) sum of all list positive number")
print("8) Count the numebr of words")
print("9) swap the number")



ch = int(input("Enter your choice ="))
if ch == 1:
    a = int(input("Enter the value of length ="))
    b = int(input("Enter the value of width ="))
    print(rectangle(a,b))
elif ch == 2:
    name = str(input("Enter the your name ="))
    age = int(input("Enter your age ="))
    greeting(name, age)
elif ch == 3:
    a = int(input("Enter your  number = "))
    evenodd(a)
elif ch == 4:
    a = int(input("Enter how many number you want to enter ="))
    value=[]
    for x in range(0,a+1):
        val = int(input())
        value.append(val)
    maxmin(value,a)
elif ch == 5:
    p = int(input("Enter your principle amount ="))
    i = int(input("Enter your intrest rate ="))
    t = int(input("enter your time period ="))
    print(compoundIntrest(p,i,t))
elif ch == 6:
    day = int(input("Enter your days ="))
    dayCal(day)
elif ch == 7:
    list1 =[]
    a = int(input("Enter your number ="))
    print("Enter your list number")
    for x in range(0,a+1):
        val = int(input())
        list1.append(val)
    print(sumPositi(list1,a))
elif ch == 8:
    set1 = str(input("Enter your sentence ="))
    print(countWord(set1))
elif ch == 9:
    a = int(input("Enter your number a ="))
    b = int(input("Enter your number b ="))
    a = b - a
    b = b - a
    a = a + b
    print("a =",a)
    print("b =",b)