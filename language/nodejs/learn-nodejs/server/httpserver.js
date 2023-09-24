const http = require("http")
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        console.log(req.url)
        res.end("Hello from other side");
    }
    else if(req.url == "/home"){
        console.log(req.url)
        res.end("Hello from home side");
    }
    else if(req.url == "/about"){
        console.log(req.url)
        res.end("Hello from about side");
    }
    else if(req.url == "/contact"){
        console.log(req.url)
        res.end("Hello from contat side");
    }
    else{
        console.log(req.url)
        res.end("<h1>404 error</h1>");
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("your server is running on 8000");
}); 
 
    