"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("../models/Customer"));
const CustomerController = {
    getAllCustomers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const customers = yield Customer_1.default.find();
            res.json(customers);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getCustomer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { customerId } = req.params;
            const customer = yield Customer_1.default.findById(customerId);
            res.json(customer);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    editCustomer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { customerId } = req.params;
            const { customerName, customerMobileNumber, customerPayMode } = req.body;
            const updatedCustomer = yield Customer_1.default.findByIdAndUpdate(customerId, { $set: { name: customerName, mobileNumber: customerMobileNumber, paymentType: customerPayMode } }, { new: true });
            res.json(updatedCustomer);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    deleteCustomer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { customerId } = req.params;
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
};
exports.default = CustomerController;
