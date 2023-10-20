const http = require("http");
const fs = require("fs")
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("hello you are in my first sucessfull api project")
    }
    else if(req.url == "/api"){
        fs.readFile("language/nodejs/learn-nodejs/api/new.json","utf-8",(err,data)=>{
            res.end(data);

            console.log(data)
        })
    }
})

// console.log(fs.readFile(__dirname))
server.listen(2003,"127.0.0.1",()=>{
    console.log("the port 2003 is successfully working");
})