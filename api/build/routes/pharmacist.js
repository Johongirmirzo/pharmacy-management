"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PharmacistController_1 = require("../controllers/PharmacistController");
const isAdmin_1 = require("../middlewares/isAdmin");
const validatePharmacist_1 = __importDefault(require("../middlewares/validatePharmacist"));
const validators_1 = require("../middlewares/validators");
const router = (0, express_1.Router)();
// pharmacist routes 
router.post("/login", validators_1.pharmacistLoginValidator, PharmacistController_1.PharmacistController.login);
// admin routes
router.post("/admin/login", validators_1.pharmacistLoginValidator, PharmacistController_1.PharmacistController.login);
router.get("/getAllPharmacists", validatePharmacist_1.default, isAdmin_1.isAdmin, PharmacistController_1.PharmacistController.getAllPharmacists);
router.get("/getPharmacist/:pharmacistId", validatePharmacist_1.default, isAdmin_1.isAdmin, PharmacistController_1.PharmacistController.getPharmacist);
router.post("/createPharmacist", validatePharmacist_1.default, isAdmin_1.isAdmin, validators_1.pharmacistRegisterValidator, PharmacistController_1.PharmacistController.createPharmacist);
router.put("/editPharmacist/:pharmacistId", validatePharmacist_1.default, isAdmin_1.isAdmin, validators_1.pharmacistEditValidator, PharmacistController_1.PharmacistController.editPharmacist);
router.delete("/deletePharmacist/:pharmacistId", validatePharmacist_1.default, isAdmin_1.isAdmin, PharmacistController_1.PharmacistController.deletePharmacist);
// general routes
router.delete("/logout", PharmacistController_1.PharmacistController.logout);
router.post("/changeProfile/:pharmacistId", validators_1.changeProfileValidator, PharmacistController_1.PharmacistController.changeProfile);
router.post("/changePassword/:pharmacistId", validators_1.changePasswordValidator, PharmacistController_1.PharmacistController.changePassword);
exports.default = router;
