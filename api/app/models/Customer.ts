import mongoose from "mongoose";

interface ICustomer extends mongoose.Document {
    name: string;
    mobileNumber: string;
    paymentType: string;
}

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobileNumber: { 
        type: String, 
        required: true
    },
    paymentType: {
        type: String,
        enum: ["CASH", "CARD"],
        required: true,
    }
})

export default mongoose.model<ICustomer>("Customer", CustomerSchema);