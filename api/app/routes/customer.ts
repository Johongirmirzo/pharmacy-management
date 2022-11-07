import {Router} from "express";
import CustomerController from "../controllers/CustomerController";
import {customerValidator} from "../middlewares/validators";
import validatePharmacist from "../middlewares/validatePharmacist";

const router = Router();

router.get("/getAllCustomers", validatePharmacist, CustomerController.getAllCustomers);
router.get("/getCustomer/:customerId", validatePharmacist, CustomerController.getCustomer)
router.put("/editCustomer/:customerId", customerValidator, validatePharmacist, CustomerController.editCustomer);

export default router;