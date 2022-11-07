import {Router} from "express";
import OrderController from "../controllers/OrderController";
import validatePharmacist from "../middlewares/validatePharmacist"
import {customerValidator} from "../middlewares/validators"
import {isAdmin} from "../middlewares/isAdmin"

const router = Router();


router.get("/getAllOrders", validatePharmacist, isAdmin, OrderController.getAllOrders);
router.get("/getOrder/:orderId", validatePharmacist, isAdmin, OrderController.getOrder);
router.get("/getPharmacistOrders/:pharmacistId", validatePharmacist, OrderController.getPharmacistOrders)
router.post("/createOrder/:pharmacistId", customerValidator, validatePharmacist, OrderController.createOrder);

export default router;