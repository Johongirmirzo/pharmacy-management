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
exports.PharmacistController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Pharmacist_1 = __importDefault(require("../models/Pharmacist"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
exports.PharmacistController = {
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const pharmacist = yield Pharmacist_1.default.findOne({ email });
            if (!pharmacist) {
                return res.status(400).json({ message: "Email does not exist!" });
            }
            if (!(yield bcrypt_1.default.compare(password, pharmacist.password))) {
                return res.status(400).json({ message: "Wrong credentials!" });
            }
            const accessToken = (0, generateToken_1.default)({ id: pharmacist._id, username: pharmacist.username, isAdmin: pharmacist.isAdmin, expirationTime: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}` });
            const refreshToken = (0, generateToken_1.default)({ id: pharmacist._id, username: pharmacist.username, isAdmin: pharmacist.isAdmin, expirationTime: `${process.env.REFRESH_TOKEN_EXPIRATION_TIME}` });
            res.json({ pharmacist, accessToken, refreshToken });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getAllPharmacists: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const pharmacists = yield Pharmacist_1.default.find({ isAdmin: false }, { password: 0, isAdmin: 0 });
            res.json(pharmacists);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getPharmacist: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const pharmacist = yield Pharmacist_1.default.findById(pharmacistId, { password: 0 });
            res.json(pharmacist);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    createPharmacist: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { fullname, username, email, mobileNumber, gender, password } = req.body;
            const hashedPassword = yield bcrypt_1.default.hash(password, 12);
            const pharmacist = yield Pharmacist_1.default.create({
                fullname,
                username,
                email,
                mobileNumber,
                gender: gender.toUpperCase(),
                password: hashedPassword
            });
            res.status(201).json({ _id: pharmacist._id, fullname, username, email, mobileNumber, gender });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    editPharmacist: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const pharmacist = yield Pharmacist_1.default.findById(pharmacistId);
            if (!pharmacist) {
                return res.status(404).json({ message: "Pharmacist not found!" });
            }
            const updatedUser = yield Pharmacist_1.default.findByIdAndUpdate(pharmacist._id, { $set: Object.assign({}, req.body) }, { new: true });
            res.json(updatedUser);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ message: err.message });
        }
    }),
    deletePharmacist: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const pharmacist = yield Pharmacist_1.default.findById(pharmacistId);
            console.log("Delete Pharmacist", pharmacistId, pharmacist);
            if (!pharmacist) {
                return res.status(404).json({ message: "Pharmacist not found!" });
            }
            yield pharmacist.delete();
            res.json({ message: "Pharmacist deleted successfully!" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    logout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json({ message: "Pharmacist logged out successfully!" });
    }),
    changeProfile: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const pharmacist = yield Pharmacist_1.default.findById(pharmacistId);
            if (!pharmacist) {
                return res.status(404).json({ message: "Pharmacist not found!" });
            }
            const updatedUser = yield Pharmacist_1.default.findByIdAndUpdate(pharmacist._id, { $set: Object.assign({}, req.body) }, { new: true });
            res.json(updatedUser);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    changePassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { pharmacistId } = req.params;
            const { currentPassword, newPassword } = req.body;
            const pharmacist = yield Pharmacist_1.default.findById(pharmacistId);
            if (!pharmacist) {
                return res.status(404).json({ message: "Pharmacist does not exist!" });
            }
            if (!(yield bcrypt_1.default.compare(currentPassword, pharmacist.password))) {
                return res.status(400).json({ message: "Incorrect Password!" });
            }
            const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
            pharmacist.password = hashedPassword;
            yield pharmacist.save();
            res.status(201).json({ message: "Password changed successfully" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
};
