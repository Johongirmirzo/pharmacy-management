"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const editMedicineSchema = (0, yup_1.object)({
    medicalCompanyId: (0, yup_1.string)().
        required("Medical company id can't be empty!"),
    medicineName: (0, yup_1.string)().
        required("Medicine name can't be empty!").
        min(2, "Minimum medicineName length is 2").
        max(100, "Maximum medicineName length is 100"),
    batchNumber: (0, yup_1.string)().
        required("Batche number can't be empty!").
        min(8, "Minimum batch number length is 8").
        max(12, "Maximum batch number length is 12"),
    releaseDate: (0, yup_1.string)().
        required("Medicine relase date can't be empty!"),
    expireDate: (0, yup_1.string)().
        required("Medicine expire date can't be empty!"),
    totalInStock: (0, yup_1.number)().
        required("Medicine quantity can't be empty!").
        integer("Value must be a integer").
        min(0, "Minimum allowed value is 0").
        max(100000, "Maximum allowed value is 100000"),
    price: (0, yup_1.number)().
        required("Medicine price can't be empty!").
        min(0, "Minimum allowed value is 0").
        max(100000, "Maximum allowed value is 100000"),
});
exports.default = editMedicineSchema;
