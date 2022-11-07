"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const validatePharmacist_1 = __importDefault(require("../middlewares/validatePharmacist"));
const validators_1 = require("../middlewares/validators");
const isAdmin_1 = require("../middlewares/isAdmin");
const router = (0, express_1.Router)();
router.get("/getAllOrders", validatePharmacist_1.default, isAdmin_1.isAdmin, OrderController_1.default.getAllOrders);
router.get("/getOrder/:orderId", validatePharmacist_1.default, isAdmin_1.isAdmin, OrderController_1.default.getOrder);
router.get("/getPharmacistOrders/:pharmacistId", validatePharmacist_1.default, OrderController_1.default.getPharmacistOrders);
router.post("/createOrder/:pharmacistId", validators_1.customerValidator, validatePharmacist_1.default, OrderController_1.default.createOrder);
exports.default = router;
