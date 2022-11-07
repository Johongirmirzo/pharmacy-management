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
const Medicine_1 = __importDefault(require("../models/Medicine"));
const Cart_1 = __importDefault(require("../models/Cart"));
const CartController = {
    getAllCartItems: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const cartItems = yield Cart_1.default.findOne({ pharmacistId });
            res.json(cartItems);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    addToCart: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Cart", req.user);
        try {
            const { pharmacistId } = req.params;
            const { medicineId, companyName, medicineName, batchNumber, quantity, price } = req.body;
            const medicine = yield Medicine_1.default.findById(medicineId);
            const cart = yield Cart_1.default.findOne({ pharmacistId });
            if (medicine.totalInStock < quantity) {
                return res.status(400).json({ message: "Medicine is out of stock" });
            }
            if (cart) {
                const total = price * quantity;
                cart.orderItems.push({ medicineId, companyName, medicineName, batchNumber, quantity, price, total });
                yield cart.save();
                console.log("existing cart item");
                res.json(cart.orderItems[cart.orderItems.length - 1]);
            }
            else {
                const total = price * quantity;
                const newCart = yield Cart_1.default.create({
                    pharmacistId,
                    orderItems: [{ medicineId, companyName, medicineName, batchNumber, quantity, price, total }]
                });
                console.log("New cart item");
                res.status(201).json(newCart.orderItems[newCart.orderItems.length - 1]);
            }
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    deleteCart: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { cartId } = req.params;
            yield Cart_1.default.updateOne({}, { $pull: { orderItems: { _id: cartId } } });
            res.json({ message: "Cart Item is successfully deleted!" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
};
exports.default = CartController;
