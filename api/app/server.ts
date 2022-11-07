import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import connectRedis from "connect-redis";
import MongoStore from "connect-mongo";
import Redis from "ioredis"
import helmet from "helmet";
import connectDB from "./config/connectDB";
import pharmacistRoutes from "./routes/pharmacist";
import medicineRoutes from "./routes/medicine";
import companyRoutes from "./routes/company";
import cartRoutes from "./routes/cart";
import orderRoutes from "./routes/order";
import reportRoutes from "./routes/report";
import customerRoutes from "./routes/customer";

const app = express();

const allowedDomains = [process.env.CLIENT_URL || "http://localhost:3000",  process.env.ADMIN_URL || "http://localhost:3001"]
app.use(cors({
    origin: function (origin, callback) {
        console.log("Origin Check", origin)
        // bypass the requests with no origin (like curl requests, mobile apps, etc )
        if (!origin) return callback(null, true);
     
        if (allowedDomains.indexOf(origin) === -1) {
          var msg = `This site ${origin} does not have an access!. Only specific domains are allowed to access it.`;
          return callback(new Error(msg), false);
        }
        console.log("Access control enabled", allowedDomains.indexOf(origin))
        return callback(null, true);
      },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
 

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));

// const RedisStore = connectRedis(session);
// const redisClient = new Redis();

app.use(session({
    secret: process.env.SESSION_SECRET || 'very secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: "mongodb://localhost/phm"})
}));

app.use("/api/auth/pharmacist", pharmacistRoutes);
app.use("/api/medicine", medicineRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/report", reportRoutes);


// connect db and run the server
(async ()=>{
    try {
        const PORT  = process.env.PORT || 5500;
        await connectDB();
        app.listen(PORT, ()=> console.log(`Server is running at port: ${PORT}`))
    }catch(err){
        console.error(err);
    }   
})();