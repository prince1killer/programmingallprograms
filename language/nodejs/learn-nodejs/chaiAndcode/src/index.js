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