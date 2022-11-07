import {Router} from "express";
import CompanyController from "../controllers/CompanyController";
import {isAdmin} from "../middlewares/isAdmin"
import validatePharmacist from "../middlewares/validatePharmacist"

const router = Router();

router.get("/getAllCompanies", validatePharmacist, isAdmin, CompanyController.getAllMedicalCompanies);
router.get("/getCompany/:companyId", validatePharmacist, isAdmin, CompanyController.getCompany);
router.post("/createCompany", validatePharmacist, isAdmin, CompanyController.createMedicalCompany);
router.put("/editCompany/:companyId", validatePharmacist, isAdmin, CompanyController.editMedicalCompany);
router.delete("/deleteCompany/:companyId", validatePharmacist, isAdmin, CompanyController.deleteMedicalCompany);

export default router;