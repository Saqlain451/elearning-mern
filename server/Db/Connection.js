import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

// create connection

const createConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected with mongodb");
    } catch (error) {
        console.log("Database not connected");
    }
}

createConnection();
export default createConnection;