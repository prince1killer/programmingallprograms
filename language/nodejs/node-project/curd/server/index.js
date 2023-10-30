const express = require('express')
const cors = require('cors')
const app = express()
const collection = require("./Mongod.jsx")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const port = 5000;


app.post("/",async (req,res)=>{
    const {name,user,email,pass}= req.body
    
    const data = {
        name :name,
        user : user,
        email : email,
        pass : pass
    }
    
    await collection.insertMany([data])
    console.log(data)
})

app.get("/",(req,res)=>{
    res.send("this is correct path")
})

app.listen(port,()=>{
    console.log(`your server has successfully open in ${port} port`)
})

