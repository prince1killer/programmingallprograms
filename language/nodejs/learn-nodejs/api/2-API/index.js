const http = require("http")
const fs = require("fs");
const { parseArgs } = require("util");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("this is my node app");
        console.log(res.url)
        // "sdfsdfsdfsfsdf"
    }
    else if(req.url == "/home"){
        fs.readFile(`api.json`, "utf-8",(err,data)=>{
            // res.end(data);
            let objData = JSON.parse(data).join("");
            // res.json(data)
            // console.log(objData[0].message.hound)
            res.end((objData[0].message))
        })
    }

});

server.listen(2003  ,"127.0.0.1",()=>{
    console.log("listening to the server on 2003")
})