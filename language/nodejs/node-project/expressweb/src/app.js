const express = require("express")
const path = require("path") 
const app = express();
const port = process.env.PORT || 5000

// public static path express

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));



// Routing
app.get("/",(req,res)=>{
    res.send("Hello there i am pagal")
}) 

app.get("/about",(req,res)=>{
    res.send("About there i am pagal")
}) 

app.get("/pages",(req,res)=>{
    res.send("Pages there i am pagal")
}) 

app.get("/weather",(req,res)=>{
    res.send("weather there i am pagal")
}) 

app.get("*",(req,res)=>{
    res.send("404 error")
}) 


app.listen(port, ()=>{
    console.log(`your servewr is running in ${port} port`)
})