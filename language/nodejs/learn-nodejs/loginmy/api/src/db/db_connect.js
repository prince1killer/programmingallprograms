import mongoose from "mongoose";

const db_connect = async () => {
    try {
        await mongoose.connect(`${process.env.CONNECT_DB}`)
        console.log("connect successfully");
    } catch (error) {
        console.log("Error come in connection "+error)
    }
}

export default db_connect;