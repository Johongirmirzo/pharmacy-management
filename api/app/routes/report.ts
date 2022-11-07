import {Router} from "express";
import ReportController from "../controllers/ReportController"
import validatePharmacist from "../middlewares/validatePharmacist";
import {isAdmin} from "../middlewares/isAdmin"

const router = Router();

router.get("/stockReport", validatePharmacist, isAdmin,  ReportController.getStockReports);
router.get("/salesReport", validatePharmacist, isAdmin,  ReportController.getSalesReports);
router.get("/pharmacistSaleReport/:pharmacistId", validatePharmacist,  ReportController.getPharmacistSaleReports);
router.get("/invoice/:invoiceNumber", validatePharmacist,  ReportController.getInvoice);

export default router;