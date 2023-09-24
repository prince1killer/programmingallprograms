// let arr1 = [1,2,4]
// let arr2 = [,5,6,7]
// let arr3 = arr1+arr2;
// console.log(arr3)


// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// Array.prototype.unshift.apply(arr1,arr2)
// console.log(arr2)

let arr1 = [1,2,3]
const arr2 = [4,5,6]
arr1 = [...arr1,...arr2]
console.log(arr1)