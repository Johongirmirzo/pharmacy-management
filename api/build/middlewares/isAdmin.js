"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const isAdmin = (req, res, next) => {
    var _a;
    console.log("Admin user", req.user);
    if ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.isAdmin) {
        return next();
    }
    res.status(403).json({ message: "You are not admin! You can't access this resource!" });
};
exports.isAdmin = isAdmin;
