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
const uuid_1 = require("uuid");
const Medicine_1 = __importDefault(require("../models/Medicine"));
const Cart_1 = __importDefault(require("../models/Cart"));
const Customer_1 = __importDefault(require("../models/Customer"));
const Order_1 = __importDefault(require("../models/Order"));
const OrderController = {
    createOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const { customerName, customerMobileNumber, customerPayMode, orderItems } = req.body;
            const items = orderItems;
            const soldOrderItems = items.map((item) => (Object.assign(Object.assign({}, item), { soldDate: new Date() })));
            const invoiceNumber = (0, uuid_1.v4)();
            // updating medicine with how many medicines sold
            soldOrderItems.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
                const medicine = yield Medicine_1.default.findById(item.medicineId);
                if (medicine) {
                    medicine.quantitySold += item.quantity;
                    medicine.totalInStock -= item.quantity;
                    yield medicine.save();
                }
            }));
            const customer = yield Customer_1.default.create({
                name: customerName,
                mobileNumber: customerMobileNumber,
                paymentType: customerPayMode.toUpperCase()
            });
            const order = yield Order_1.default.create({
                pharmacistId,
                customerId: customer._id,
                invoiceNumber,
                orderItems: soldOrderItems
            });
            yield Cart_1.default.deleteMany({ pharmacistId });
            res.status(201).json({
                customerName,
                customerMobileNumber,
                customerPayMode,
                order
            });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getAllOrders: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const orders = yield Order_1.default.find();
            res.json(orders);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { orderId } = req.params;
            const order = yield Order_1.default.findById(orderId);
            res.json(order);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getPharmacistOrders: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const allOrders = yield Order_1.default.find({ pharmacistId });
            res.json(allOrders);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
};
exports.default = OrderController;
