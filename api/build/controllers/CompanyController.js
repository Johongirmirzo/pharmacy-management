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
const MedicalCompany_1 = __importDefault(require("../models/MedicalCompany"));
const CompanyController = {
    getAllMedicalCompanies: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const companies = yield MedicalCompany_1.default.find();
            res.json(companies);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getCompany: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { companyId } = req.params;
            const company = yield MedicalCompany_1.default.findById(companyId);
            res.json(company);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    createMedicalCompany: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name } = req.body;
            if (!name || name.trim().length < 2) {
                return res.status(400).json({ message: "Minimum medical company name length is 2" });
            }
            if (name.trim().length > 100) {
                return res.status(400).json({ message: "Maximum medical company name length is 100" });
            }
            const company = yield MedicalCompany_1.default.create({ name });
            res.status(201).json(company);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    editMedicalCompany: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { companyId } = req.params;
            const { name } = req.body;
            if (!name || name.trim().length < 2) {
                return res.status(400).json({ message: "Minimum medical company name length is 2" });
            }
            if (name.trim().length > 100) {
                return res.status(400).json({ message: "Maximum medical company name length is 100" });
            }
            const updatedCompany = yield MedicalCompany_1.default.findByIdAndUpdate(companyId, { $set: { name } }, { new: true });
            res.json(updatedCompany);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    deleteMedicalCompany: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { companyId } = req.params;
            yield MedicalCompany_1.default.findByIdAndDelete(companyId);
            res.json({ message: "Medical Company is deleted successfully!" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
};
exports.default = CompanyController;
