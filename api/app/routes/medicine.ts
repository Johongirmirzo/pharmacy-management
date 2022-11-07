import {Router} from "express";
import MedicineController from "../controllers/MedicineController";
import {createMedicineValidator, editMedicineValidator} from "../middlewares/validators";
import { isAdmin } from "../middlewares/isAdmin";
import validatePharmacist from "../middlewares/validatePharmacist"

const router = Router();

router.get("/getAllMedicines", validatePharmacist, MedicineController.getAllMedicines);
router.get("/getMedicine/:medicineId", validatePharmacist, MedicineController.getMedicine);
router.post("/createMedicine", createMedicineValidator, validatePharmacist, isAdmin, MedicineController.createMedicine);
router.put("/editMedicine/:medicineId", editMedicineValidator, validatePharmacist, isAdmin, MedicineController.editMedicine);
router.delete("/deleteMedicine/:medicineId", validatePharmacist, isAdmin, MedicineController.deleteMedicine);

export default router;