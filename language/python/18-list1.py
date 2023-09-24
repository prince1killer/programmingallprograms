#list are the order collection of data items 
# they stote multiple items in single variable
value = [1,2,3,4,5,"pranav",'kumar',True]
number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
print(value)


# print(value[len(value)-19])
print(value)

if 1 in value:
    print("Yes")
else:
    print("no")
#=========================== Indexing ============================
print("------------indexing--------------")
print(value)
print(value[:])
print("-----------Negative indexing-----------")
print(number[-3])#negative index
print(number[len(number)-3])#negative index conver into positive index
print(number[15-3])##negative index conver into positive index
print(number[12])
print(number[1:-1:2])
print(number[::2])

#======================== list comprehension =====================
print("--------------------list comprehension----------------")
# list  = [expression(item) for itration in iterable condition]
list  = [i for i in range(10+1)]
print(list,"\n")
list1  = [i for i in range(100+1) if i%2!=0 and i%3!=0]
print(list1)