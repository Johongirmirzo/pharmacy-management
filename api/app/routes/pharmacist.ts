import {Router} from "express";
import {PharmacistController} from "../controllers/PharmacistController";
import {isAdmin} from "../middlewares/isAdmin"
import validatePharmacist from "../middlewares/validatePharmacist";
import {userLoginRateLimiter, adminLoginRateLimiter} from "../middlewares/loginRateLimiter"
import {
    pharmacistRegisterValidator, 
    pharmacistLoginValidator, 
    pharmacistEditValidator, 
    changeProfileValidator,
    changePasswordValidator
} from "../middlewares/validators"

const router = Router();

// pharmacist routes 
router.post("/login", userLoginRateLimiter, pharmacistLoginValidator,  PharmacistController.login);

// admin routes
router.post("/admin/login", adminLoginRateLimiter, pharmacistLoginValidator, PharmacistController.login)
router.get("/getAllPharmacists", validatePharmacist, isAdmin, PharmacistController.getAllPharmacists);
router.get("/getPharmacist/:pharmacistId", validatePharmacist, isAdmin, PharmacistController.getPharmacist);
router.post("/createPharmacist", validatePharmacist, isAdmin, pharmacistRegisterValidator, PharmacistController.createPharmacist);
router.put("/editPharmacist/:pharmacistId", validatePharmacist, isAdmin, pharmacistEditValidator, PharmacistController.editPharmacist);
router.delete("/deletePharmacist/:pharmacistId", validatePharmacist, isAdmin, PharmacistController.deletePharmacist);

// general routes
router.delete("/logout", PharmacistController.logout);
router.post("/changeProfile/:pharmacistId", changeProfileValidator,  PharmacistController.changeProfile);
router.post("/changePassword/:pharmacistId", changePasswordValidator, PharmacistController.changePassword);

export default router;