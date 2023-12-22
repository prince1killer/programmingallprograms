import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`sucussfull connected ${connectionInstant.connection.host
        
        }`)
    }catch(error){
        console.log(`Error ${error}`)
    }
}

export default connectDB