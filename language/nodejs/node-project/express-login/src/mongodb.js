const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/firstLoginpr1").then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log(err)
    console.log("connection failed")
})

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username : {
        type: String,
        required : true
    },
    email:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required : true
    }
}).then(()=>{
    console.log("all works")
}).catch((err)=>console.log("how are you"+err))

const collection = new mongoose.modelNames("loginData",LoginSchema)

module.exports = collection