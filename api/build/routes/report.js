"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReportController_1 = __importDefault(require("../controllers/ReportController"));
const validatePharmacist_1 = __importDefault(require("../middlewares/validatePharmacist"));
const isAdmin_1 = require("../middlewares/isAdmin");
const router = (0, express_1.Router)();
router.get("/stockReport", validatePharmacist_1.default, isAdmin_1.isAdmin, ReportController_1.default.getStockReports);
router.get("/salesReport", validatePharmacist_1.default, isAdmin_1.isAdmin, ReportController_1.default.getSalesReports);
router.get("/pharmacistSaleReport/:pharmacistId", validatePharmacist_1.default, ReportController_1.default.getPharmacistSaleReports);
router.get("/invoice/:invoiceNumber", validatePharmacist_1.default, ReportController_1.default.getInvoice);
exports.default = router;
