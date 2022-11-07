"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const pharmacistPasswordSchema = (0, yup_1.object)({
    currentPassword: (0, yup_1.string)().
        required("Current Password can't be empty!").
        min(9, "Minimum password length is 9").
        max(30, "Maximum password length is 30"),
    newPassword: (0, yup_1.string)().
        required("Password can't be empty").
        min(9, "Minimum password length is 9").
        max(30, "Maximum password length is 30"),
    newConfirmPassword: (0, yup_1.string)().
        oneOf([(0, yup_1.ref)("newPassword"), null], "Passwords must match!!!")
});
exports.default = pharmacistPasswordSchema;
