const EventEmitter = require("events")
const prompt = require("prompt");
const event = new EventEmitter();


//first example

event.on("onclick",()=>{
    console.log("this is my function");
});
event.on("onclick",()=>{
    console.log("this is our function")
})
event.emit("onclick");


//second example
event.on("onclick",()=>{
    console.log("this is the ")
})