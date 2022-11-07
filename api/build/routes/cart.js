"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CartController_1 = __importDefault(require("../controllers/CartController"));
const validatePharmacist_1 = __importDefault(require("../middlewares/validatePharmacist"));
const router = (0, express_1.Router)();
router.get("/getAllCartItems/:pharmacistId", validatePharmacist_1.default, CartController_1.default.getAllCartItems);
router.post("/addToCart/:pharmacistId", validatePharmacist_1.default, CartController_1.default.addToCart);
router.delete("/deleteCartItem/:cartId", validatePharmacist_1.default, CartController_1.default.deleteCart);
exports.default = router;
