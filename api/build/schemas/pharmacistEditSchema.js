"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const userEditSchema = (0, yup_1.object)({
    fullname: (0, yup_1.string)().
        min(5, "Minimum fullname length is 5").
        max(50, "Maximum fullname length is 50"),
    username: (0, yup_1.string)().
        min(2, "Minimum username length is 2").
        max(50, "Maximum username length is 50"),
    email: (0, yup_1.string)().
        email("Email must contain @ character").
        min(6, "Minimum email length is 6").
        max(50, "Maximum email length is 50"),
    mobileNumber: (0, yup_1.string)().
        min(7, "Minimum phone number length is 7").
        max(15, "Maximum phone number length is 15. Try removing whitespaces if any!"),
    gender: (0, yup_1.string)().
        matches(/male|female/i, "Only two values <male> and <female> allowed"),
});
exports.default = userEditSchema;
