import mongoose from "mongoose";

export interface ICartOrderItem {
    medicineId: string;
    companyName: string;
    medicineName: string;
    batchNumber: string;
    quantity: number;
    price: number;
    total: number;
}

export interface ICart extends mongoose.Document {
    pharmacistId: string;
    orderItems: ICartOrderItem[];
}

const CartSchema = new mongoose.Schema({
    pharmacistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems: [
        {
            medicineId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Medicine",
                required: true,
            },
            companyName: {
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
            quantity: {
                type: Number,
                required: true,
                default: 0,
            },
            price: {
                type: Number,
                required: true,
                default: 0,
            },
            total: {
                type: Number,
                required: true,
                default: 0,
            },
        }
    ]
})

export default mongoose.model<ICart>("Cart", CartSchema);