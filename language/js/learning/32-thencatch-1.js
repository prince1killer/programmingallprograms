//================================================== Practical 1 =====================================
//here is tje one example of promice depend on resolve and rejecting the project
let p1 = new Promise((resolve,reject)=>{
    console.log("hello")
    setTimeout(()=>{
        console.log("this is excuation of promise");
        // resolve(45);
        resolve(true)
    },5000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log("hello")
    setTimeout(()=>{
        console.log("this is promice fail");
        // resolve(45);
        reject(new Error("this is fail"))
    },5000)
})
console.log(p1,p2)//here we can see there are two error both will exicute and return back the ans
//NOTE
//here we have to see thar both p1 and p2 are running parallel 
//mean for this whole project it will take smae time
//hence normlly it will take 10s in sync but here it is taking 5s in both the case
