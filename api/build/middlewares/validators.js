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
exports.customerValidator = exports.editMedicineValidator = exports.createMedicineValidator = exports.changePasswordValidator = exports.changeProfileValidator = exports.pharmacistEditValidator = exports.pharmacistLoginValidator = exports.pharmacistRegisterValidator = void 0;
const pharmacistRegisterSchema_1 = __importDefault(require("../schemas/pharmacistRegisterSchema"));
const pharmacistLoginSchema_1 = __importDefault(require("../schemas/pharmacistLoginSchema"));
const pharmacistEditSchema_1 = __importDefault(require("../schemas/pharmacistEditSchema"));
const pharmacistProfileSchema_1 = __importDefault(require("../schemas/pharmacistProfileSchema"));
const pharmacistPasswordSchema_1 = __importDefault(require("../schemas/pharmacistPasswordSchema"));
const createMedicineSchema_1 = __importDefault(require("../schemas/createMedicineSchema"));
const editMedicineSchema_1 = __importDefault(require("../schemas/editMedicineSchema"));
const customerSchema_1 = __importDefault(require("../schemas/customerSchema"));
const pharmacistRegisterValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pharmacistRegisterSchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.status(400).json({ errors: err.errors });
    }
});
exports.pharmacistRegisterValidator = pharmacistRegisterValidator;
const pharmacistLoginValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pharmacistLoginSchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.status(400).json({ errors: err.errors });
    }
});
exports.pharmacistLoginValidator = pharmacistLoginValidator;
const pharmacistEditValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pharmacistEditSchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.status(400).json({ errors: err.errors });
    }
});
exports.pharmacistEditValidator = pharmacistEditValidator;
const changeProfileValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pharmacistProfileSchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.status(400).json({ errors: err.errors });
    }
});
exports.changeProfileValidator = changeProfileValidator;
const changePasswordValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pharmacistPasswordSchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.status(400).json({ errors: err.errors });
    }
});
exports.changePasswordValidator = changePasswordValidator;
const createMedicineValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createMedicineSchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.status(400).json({ errors: err.errors });
    }
});
exports.createMedicineValidator = createMedicineValidator;
const editMedicineValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield editMedicineSchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.status(400).json({ errors: err.errors });
    }
});
exports.editMedicineValidator = editMedicineValidator;
const customerValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customerSchema_1.default.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.status(400).json({ errors: err.errors });
    }
});
exports.customerValidator = customerValidator;
