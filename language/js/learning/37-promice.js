// //htis is our first project


// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("=========================================== 1=============================================================")
//         console.log("You promice is successfull")
//         resolve();
//     },5000)
// })

// promiseOne.then(function(){
//     console.log("this promice is consume and .then is directly link from resolve")
// })

// //this is second project


// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("=========================================== 2 =============================================================")
//         console.log("your second project is completed")
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("this your second promise is completed")
// })

// //third promise
// //here we will learn how to pass data from resolve

// console.log("=========================================== 3 =============================================================")


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(()=> resolve({username: "pranav", email: "pranav@gmail.com" , dis: "here we are using object or we can use other thing like function and array", que: "this is fourth promise"}),3000)
//     console.log("=========================================== 4 =============================================================")
// }).then((open)=>{
//     console.log(open)
//     console.log("user name ="+open.username)
// })

// //forth promise


// const  promseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("=========================================== 5 =============================================================")
//         var password = false;
//         if(password == true){
//             resolve({user1: "pranav", email: "pranav@gmail.com"})
//         }
//         else{
//             reject("Your password is wrong so your forth promise is not full filled")
//         }
//     },7000)
// }).then((pass)=>console.log(pass)).catch((fail)=>console.log(fail))


//fifth promise 
const promiseFive = new Promise((resolve, reject)=>{
    let err = true
     setTimeout(()=>{
        if(err == true){
            resolve({name: "pranav", email: "pranav@gmail.com", codeing: "JavaScript"})
        }        
        else if(err == false){
            reject("here you get error")
        }
    },3000)
});

async function promiseAnsFive(){
    try {
        const resopnce = await promiseFive
        console.log(resopnce)
        const data = JSON.parse(resopnce)
        console.log("user name = "+data)
    } catch (err) {
        console.log(err)
    }
}

promiseAnsFive()