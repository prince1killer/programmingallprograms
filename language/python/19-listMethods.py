print("-------------------------- list method ----------------------------------")
n = []
print("------------------- append ------------")
n.append(11)
print()
for x in range(10,0,-1):
    n.append(x) 
print(n,"\n")

print("----------------- sort --------------")
n.sort()
print(n,"\n")
n.sort(reverse=True)
n.append(4)
print(n,"\n")

print("----------------- index --------------")
print(n.index(4))
print("----------------- count --------------")
print(n.count(4))
     