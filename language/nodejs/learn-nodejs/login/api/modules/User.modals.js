import mongoose from "mongoose";

const userLogin =new  mongoose.Schema({
    name : {
        type : "String",
        required: true,
    },
    User:{
        type:"String",
        require:true,
        unique: true,
    },
    email:{
        type:"String",
        require:true,
        unique: true
    },
    password:{
        type:"String",
        require:true,
    }
    
})

export const User = mongoose.module('User',userLogin)