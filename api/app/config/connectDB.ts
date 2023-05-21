import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/phm")
        console.log("Database connection established!")
    }catch(err){
        console.error(err)
    }
}
export default connectDB;
