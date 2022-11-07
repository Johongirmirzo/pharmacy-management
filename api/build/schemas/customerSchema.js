"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const customerSchema = (0, yup_1.object)({
    customerName: (0, yup_1.string)().
        required("Customer name can't be empty").
        min(2, "Minimum customer name is 2").
        max(50, "Maximum customer name is 50"),
    customerMobileNumber: (0, yup_1.string)().
        required("Mobile number can't be empty").
        min(7, "Minimum phone number length is 7").
        max(15, "Maximum phone number length is 15. Try removing whitespaces if any!"),
    customerPayMode: (0, yup_1.string)().
        required("Customer pay mode can't be empty").
        matches(/cash|card/i, "Only cash and card values are allowed")
});
exports.default = customerSchema;
