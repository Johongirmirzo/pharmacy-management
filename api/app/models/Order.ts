import mongoose from "mongoose";
import { ICartOrderItem } from "./Cart";

export interface IOrderItem extends ICartOrderItem {
    soldDate: string;
}

export interface IOrder extends mongoose.Document {
    pharmacistId: string;
    customerId: string;
    invoiceNumber: string;
    orderItems: IOrderItem[];
}

const OrderSchema = new mongoose.Schema({
    pharmacistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    invoiceNumber: {
        type: String,
        required: true
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
            soldDate: {
                type: Date,
                required: true,
                default: new Date()

            }
        }
    ]
})

export default mongoose.model<IOrder>("Order", OrderSchema);