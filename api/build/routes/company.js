"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyController_1 = __importDefault(require("../controllers/CompanyController"));
const isAdmin_1 = require("../middlewares/isAdmin");
const validatePharmacist_1 = __importDefault(require("../middlewares/validatePharmacist"));
const router = (0, express_1.Router)();
router.get("/getAllCompanies", validatePharmacist_1.default, isAdmin_1.isAdmin, CompanyController_1.default.getAllMedicalCompanies);
router.get("/getCompany/:companyId", validatePharmacist_1.default, isAdmin_1.isAdmin, CompanyController_1.default.getCompany);
router.post("/createCompany", validatePharmacist_1.default, isAdmin_1.isAdmin, CompanyController_1.default.createMedicalCompany);
router.put("/editCompany/:companyId", validatePharmacist_1.default, isAdmin_1.isAdmin, CompanyController_1.default.editMedicalCompany);
router.delete("/deleteCompany/:companyId", validatePharmacist_1.default, isAdmin_1.isAdmin, CompanyController_1.default.deleteMedicalCompany);
exports.default = router;
