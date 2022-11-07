"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MedicineController_1 = __importDefault(require("../controllers/MedicineController"));
const validators_1 = require("../middlewares/validators");
const isAdmin_1 = require("../middlewares/isAdmin");
const validatePharmacist_1 = __importDefault(require("../middlewares/validatePharmacist"));
const router = (0, express_1.Router)();
router.get("/getAllMedicines", validatePharmacist_1.default, MedicineController_1.default.getAllMedicines);
router.get("/getMedicine/:medicineId", validatePharmacist_1.default, MedicineController_1.default.getMedicine);
router.post("/createMedicine", validators_1.createMedicineValidator, validatePharmacist_1.default, isAdmin_1.isAdmin, MedicineController_1.default.createMedicine);
router.put("/editMedicine/:medicineId", validators_1.editMedicineValidator, validatePharmacist_1.default, isAdmin_1.isAdmin, MedicineController_1.default.editMedicine);
router.delete("/deleteMedicine/:medicineId", validatePharmacist_1.default, isAdmin_1.isAdmin, MedicineController_1.default.deleteMedicine);
exports.default = router;
