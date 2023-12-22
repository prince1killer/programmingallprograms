import mongoose from "mongoose";

const UserLog = mongoose.Schema({
    user:   {
        tyde: String,
        require: true,
        unique: true
    },
     
})

const Dblogin = mongoose.model('Dblogin',UserLog);