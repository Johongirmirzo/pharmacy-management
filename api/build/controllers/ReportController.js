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
const moment_1 = __importDefault(require("moment"));
const Order_1 = __importDefault(require("../models/Order"));
const Medicine_1 = __importDefault(require("../models/Medicine"));
const ReportController = {
    getStockReports: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { from, to } = req.query;
            if (from && to) {
                console.log({ from, to });
                const medicines = yield Medicine_1.default.find();
                const validMedicines = medicines.filter(medicine => {
                    if ((0, moment_1.default)(medicine.createdAt).isSameOrAfter((0, moment_1.default)(from.toString())) &&
                        (0, moment_1.default)(medicine.createdAt).isSameOrBefore((0, moment_1.default)(to.toString()))) {
                        return true;
                    }
                    return false;
                });
                return res.json(validMedicines);
            }
            res.status(400).json({ message: "Please provide dates" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getPharmacistSaleReports: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const { from, to } = req.query;
            if (from && to) {
                console.log({ from, to, pharmacistId });
                const orders = yield Order_1.default.find({ pharmacistId });
                const filteredOrders = orders.map(order => {
                    return order.orderItems.filter(item => {
                        if ((0, moment_1.default)(item.soldDate).isSameOrAfter((0, moment_1.default)(from.toString())) &&
                            (0, moment_1.default)(item.soldDate).isSameOrBefore((0, moment_1.default)(to.toString()))) {
                            return true;
                        }
                        return false;
                    });
                }).flat();
                return res.json(filteredOrders);
            }
            res.status(400).json({ message: "Please provide dates" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getSalesReports: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { from, to } = req.query;
            const orders = yield Order_1.default.find();
            if (from && to) {
                const filteredOrders = orders.map(order => {
                    return order.orderItems.filter(item => {
                        if ((0, moment_1.default)(item.soldDate).isSameOrAfter((0, moment_1.default)(from.toString())) &&
                            (0, moment_1.default)(item.soldDate).isSameOrBefore((0, moment_1.default)(to.toString()))) {
                            return true;
                        }
                        return false;
                    });
                }).flat();
                console.log("Orders amount", filteredOrders.length);
                return res.json(filteredOrders);
            }
            res.status(400).json({ message: "Please provide dates" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getInvoice: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { invoiceNumber } = req.params;
            const orders = yield Order_1.default.findOne({ invoiceNumber });
            res.json(orders);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
};
exports.default = ReportController;
