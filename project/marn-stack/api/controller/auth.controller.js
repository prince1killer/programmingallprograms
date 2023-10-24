import User from '../models/user.models.js'

export const signup = async (req, res,next)=>{
    const {username, email, password} = req.body;
    const newUser = new User({username, email, password})
    try {
        await newUser.save()
        res.status(201).json("User created Sucessfully")    
    } catch (error) {
        // res.status(500).json(error.message)
        next(error);
    }



}