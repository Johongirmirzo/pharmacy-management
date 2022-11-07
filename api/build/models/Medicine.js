"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MedicineSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.default = mongoose_1.default.model("Medicine", MedicineSchema);
