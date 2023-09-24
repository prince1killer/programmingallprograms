
let arr = ['pranav','kumar','parmar','rahul','patal','game']

let person = [
    {
        name : 'pranav',
        roll : 12
    },
    {
        name : 'kumar',
        roll : 23
    },
    {
        name:'prince',
        roll:34
    },
    {
        name:'parnmr',
        roll:45
    }
]

//  for(let i=0;i<=arr.length;i++){
    //     console.log(arr[i])
    //  }
//===============================================================forin loop============================================    
    //mainly for in loop is use in array
    // here x is element of array
    // and if we print x then we get index of an array
console.log("\nFor in loop in array\n")
for(let x in arr){
    console.log(x+"  "+arr[x]);
}

console.log("\nFor in loop in object\n")


for(let j in person){
    console.log(j+' '+person[j].name+' '+person[j].roll);
}

//======================================================forof loop================================================== 
//here for of loop will give us element of an array

console.log("\nFor of loop in array\n")


for(let x of arr){
    console.log(x);
}

console.log("\nFor of loop in object\n")

for(let j of person){
    console.log(j)
}


//=============================================forEach loop======================================

console.log("\nForEach loop \n");



 arr.forEach((ele,ind,arry1)=>{
    console.log(ind+"    "+ele+"         "+arry1);
 })