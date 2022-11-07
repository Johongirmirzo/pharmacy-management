"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    pharmacistId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    customerId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
                type: mongoose_1.default.Schema.Types.ObjectId,
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
});
exports.default = mongoose_1.default.model("Order", OrderSchema);
