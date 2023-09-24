//we use promices to privent from parimet of dom 
//number of times using callback in the form of loop is called Parimet if dom
//the solution to the callback hell is promices

//here the promices are exicuted or fail in both the cases the subtitle will notified

//the syntex of a promices:-
//let promices = new promices((resolve,reject)=>{});

//example:-

let promise = new Promise(function(resolve,reject){
    console.log("here is some working reject or resolve ")
    resolve(54);
})

console.log("Hello world");
setTimeout(()=>{
    console.log("Hello Two is 2 second ");
},2000)
console.log("my name is "+"Hello there")
console.log(promise)

