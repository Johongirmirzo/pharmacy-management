import mongoose from "mongoose";

export interface IMedicine extends mongoose.Document {
    medicalCompanyName: string;
    medicineName: string;
    medicalCompanyId: string;
    batchNumber: string;
    releaseDate: string;
    expireDate: string;
    quantitySold: number;
    totalInStock: number;
    price: number;
    createdAt: string;
}

const MedicineSchema = new mongoose.Schema({
    medicalCompanyName: {
        type: String,
        required: true,
    },
    medicineName: {
        type: String,
        required: true,
    },
    batchNumber: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    expireDate: {
        type: Date,
        required: true,
    },
    medicalCompanyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    quantitySold: {
        type: Number,
        required: true,
        default: 0
    },
    totalInStock: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
}, {timestamps: true})

export default mongoose.model<IMedicine>("Medicine", MedicineSchema)