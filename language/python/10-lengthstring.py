a = "printing the length of the string"
print(len(a))


b = "printing"
print(len(b))

#========================== 1 program ========================
print("===================== 1 program ==================");
a = "this is the another new length of string"
print(a[5:len(a)-5]);
# this is called slicing method a[2:6] it mean that slicing atart from the 2 to 6 charater

print("=================== 2 program ===================");
# if we not print any latter in first place of index then pyton will put 0 inplace of the index
b = "if there is no index then print "
print(a[:5]);


print("=================== 3 prgram ================");
# if ther is not index in both the side then it will take both the index by default
print(a[:]);

print("================ 4 program ==================");
#in first index there will be put -1 we get
c = "month";
print(len(c));
print(c[-1:len(c)]);
print(c[-3:-1])
print(c[-5:4])
print(b[::-3])
print(b[::-1])