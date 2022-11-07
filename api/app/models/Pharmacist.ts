import mongoose from "mongoose";

export interface IPharmacist extends mongoose.Document {
    fullname: string;
    username: string;
    email: string;
    mobileNumber: string;
    gender: string;
    password: string;
    isAdmin: boolean;
}

const PharmacistSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE"],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
})

export default mongoose.model<IPharmacist>("Pharmacist", PharmacistSchema);