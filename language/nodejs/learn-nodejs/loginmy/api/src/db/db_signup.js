import mongoose from "mongoose";

const UserResersition = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    user:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
})

const User = mongoose.module('User',UserResersition)