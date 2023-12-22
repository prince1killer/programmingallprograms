import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './db/connection.js';
const app = express();
dotenv.config()
// require('dotenv').config({path:'./env'})




connectDB()


console.log(process.env.MONGODB_URL)
        app.listen(process.env.PORT,()=>{
            console.log(`your server is sucessfull in ${process.env.PORT} port`)
})










//we had use IIFE for connecting DB and because data needs time to come here so we always use async -await
// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}`)
//         app.on("error",(error)=>{
//             console.log("error",error);
//             throw error 
//         })

//         console.log(process.env.MONGODB_URL)
//         app.listen(process.env.PORT,()=>{
//             console.log(`your server is sucessfull in ${process.env.PORT} port`)
//         })
        
//     } catch (error) {
//         console.log("Error Occer "+error);
//     }
// })()

