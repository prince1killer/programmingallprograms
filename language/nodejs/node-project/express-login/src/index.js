const express = require("express")
const app = express()
const path = require("path")
const port = 5000;
const hbs = require("hbs");
const collection = require("./mongodb")



const templatePath = path.join(__dirname,"../template")
console.log(templatePath)
app.use(express.json())
app.set("view engine", "hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login");
})

app.get("/home",(req,res)=>{
    res.render("home");
})


app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signup", async(req,res)=>{
    const signupdata = {
        name: req.body.name,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password 
    }
    await collection.insertMany([signupdata])
    res.render("home")
})


app.listen(port, ()=>{
    console.log(`your site is running on this ${port} port`);
});