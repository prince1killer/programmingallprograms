import numpy as np
a = np.array([[1,2,3,4],[6,7,8,9]])
a1 = np.array([[1,2,3,4],[6,7,8,9]])
b = np.array([[1,2],[4,5],[7,8]])
print("printing just array\n",a)
print("printing max array = ",a.max())
print("printing sum or arrat = ",a.sum())
print("printing square root of array =\n ",np.sqrt(a))
print("printing mean of array = ",np.std(a))
print("finding size",a.itemsize/8,"kilobyte")
print("finding size",a.itemsize,"byte")
print("size of array = ",a.size)
print("size of array = ",a.shape)

# a = a.reshape(3,2)#here the first parameter give number of array and second give number of 
# b = b.reshape(2,3)

# print("reshaping the array")
# print(b)
# print(a)

c = np.array([[1,2,3,4,5,6,7,8,9]])
lin = np.linspace(12,20,5)
print("evenly spaced value = ",lin)

# there is another way to call  array
print("this is another way to call multi dimention array")
print(b[0,1])
print(b[1,0])
print(b[2,1])
print(b[0,0])
# ===============================
# concanitation of array here v and h define vertical and horizontal concationation
print("concatination of array = ")
# 
print("vartical concarionation")
print(np.vstack((a,a1)))
print("horinzontal concation")
print(np.hstack((a,a1)))