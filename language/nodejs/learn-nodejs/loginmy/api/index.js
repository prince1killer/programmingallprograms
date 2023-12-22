import express  from "express";
import dotenv from 'dotenv'
import db_connect from "./src/db/db_connect.js";
dotenv.config();
const app = express();

const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Hello server")
})

db_connect();

app.listen(port,()=>{
    console.log(`your server is running on ${port} port`)
})