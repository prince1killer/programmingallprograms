# switching the number from list
num = input("Enter the value you want to insert =")

list1=[]
print("Enter the value=")
for x in range(num):
    x = input()
    list1.append(x)

a = int(input("Enter the value number ="))
b = int(input("Enter the value you want to change ="))

print(list1)
if a > len(list1):
    print("please enter the value less or equale to list")
else:
    temp = list1[a]
    list1[a] = list1[b]
    list1[b] = temp


