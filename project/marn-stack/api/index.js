import express from "express";
import  mongoose from "mongoose";
import dotenv from "dotenv";
import useRouter from "./router/user.router.js"
import authRouter from './router/auth.router.js'
const app = express();
const port = 3000;
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{console.log("successfull")}).catch((err)=>{console.log(err)})

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello pagaln")
})


app.get("/text",(req,res)=>{
    res.json("hello pagaln")
})

app.use('/api/user',useRouter)
app.use('/api/auth',authRouter)
app.use((err, req, res, next)=> {
    const statuseCode = err.statuseCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statuseCode).json(()=>{
        success : false,
        statuseCode,
        message
    })
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
}) 