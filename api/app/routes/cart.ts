import {Router} from "express";
import CartController from "../controllers/CartController";
import validatePharmacist from "../middlewares/validatePharmacist";

const router = Router();

router.get("/getAllCartItems/:pharmacistId", validatePharmacist, CartController.getAllCartItems)
router.post("/addToCart/:pharmacistId", validatePharmacist, CartController.addToCart)
router.delete("/deleteCartItem/:cartId", validatePharmacist, CartController.deleteCart)

export default router;