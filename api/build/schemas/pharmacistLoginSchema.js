"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const userLoginSchema = (0, yup_1.object)({
    email: (0, yup_1.string)().
        required("Email can't be empty").
        email("Email must contain @"),
    password: (0, yup_1.string)().
        required("Passwords can't be empty").
        min(9, "Minimum password length is 9").
        max(30, "Maximum password length is 30")
});
exports.default = userLoginSchema;
