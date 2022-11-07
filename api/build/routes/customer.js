"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerController_1 = __importDefault(require("../controllers/CustomerController"));
const validators_1 = require("../middlewares/validators");
const validatePharmacist_1 = __importDefault(require("../middlewares/validatePharmacist"));
const router = (0, express_1.Router)();
router.get("/getAllCustomers", validatePharmacist_1.default, CustomerController_1.default.getAllCustomers);
router.get("/getCustomer/:customerId", validatePharmacist_1.default, CustomerController_1.default.getCustomer);
router.put("/editCustomer/:customerId", validators_1.customerValidator, validatePharmacist_1.default, CustomerController_1.default.editCustomer);
exports.default = router;
