const fs = require("fs");

const info = {
    fname : "pranav",
    lname : "kumar",
    address : "idar",
    fruit : "apple",
    drawing : "sketch",
    number : 45,
    phone : 123123123
}
// console.log(info)
// const newJson = JSON.stringify(info)
// console.log(newJson)
console.log(fs.writeFile("language/nodejs/learn-nodejs/api/new.json",newJson,(err)=>{
    console.log(err)
}))
let newObj = JSON.parse(newJson);
console.log(newObj)

fs.readFile("./language/nodejs/learn-nodejs/api/new.json","utf-8",(err,data)=>{
    console.log(data);
    const onj = JSON.parse(data)
    console.log(onj)
})  