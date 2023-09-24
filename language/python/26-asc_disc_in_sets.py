num =int(input("Enter the value"))
list1 = []
temp = 0
for x in range(num):
    w = input("Enter the value in list =")
    list1.append(w)
for x in range(num):
    for y in range(x+1,num):
        if list1[x]>list1[y]:
            temp = list1[x]
            list1[x] = list1[y]
            list1[y] = temp

for x in range(num):
    print(list1[x])
print(list1) 