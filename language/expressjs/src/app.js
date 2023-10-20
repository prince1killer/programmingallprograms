const express  = require("express");
const path = require("path")
const app = express();

const port = 5000;

console.log(path.join(__dirname,"../public"))
const staticPath = path.join(__dirname,"../public");//conneting path to static html website
// app.use(express.static(staticPath))//express.static is use to connect

// seting path for hbs views dir
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("index")
})


// app.get("/",(req, res)=>{
//     res.send("This is express home page");
// })

app.get("/about",(req,res)=>{ 
    res.send("This is express about page")
})

app.get("/contect",(req,res)=>{
    res.send("This is express contect page")
})

app.get("/temp",(req,res)=>{
    res.send({
        id : "name",
        name : "pass",
        class : "34",
        roll : "1234567"
    })
})



app.listen(port, ()=>{
    console.log(`express js successfully running on port ${port}`);
})
