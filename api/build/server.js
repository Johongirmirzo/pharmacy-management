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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const connectDB_1 = __importDefault(require("./config/connectDB"));
const pharmacist_1 = __importDefault(require("./routes/pharmacist"));
const medicine_1 = __importDefault(require("./routes/medicine"));
const company_1 = __importDefault(require("./routes/company"));
const cart_1 = __importDefault(require("./routes/cart"));
const order_1 = __importDefault(require("./routes/order"));
const report_1 = __importDefault(require("./routes/report"));
const customer_1 = __importDefault(require("./routes/customer"));
const app = (0, express_1.default)();
const allowedDomains = [process.env.CLIENT_URL || "http://localhost:3000", process.env.ADMIN_URL || "http://localhost:3001"];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        console.log("Origin Check", origin);
        // bypass the requests with no origin (like curl requests, mobile apps, etc )
        if (!origin)
            return callback(null, true);
        if (allowedDomains.indexOf(origin) === -1) {
            var msg = `This site ${origin} does not have an access!. Only specific domains are allowed to access it.`;
            return callback(new Error(msg), false);
        }
        console.log("Access control enabled", allowedDomains.indexOf(origin));
        return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use("/api/auth/pharmacist", pharmacist_1.default);
app.use("/api/medicine", medicine_1.default);
app.use("/api/company", company_1.default);
app.use("/api/cart", cart_1.default);
app.use("/api/order", order_1.default);
app.use("/api/customer", customer_1.default);
app.use("/api/report", report_1.default);
// connect db and run the server
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const PORT = process.env.PORT || 5500;
        yield (0, connectDB_1.default)();
        app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
    }
    catch (err) {
        console.error(err);
    }
}))();
