import {Request, Response} from "express";
import Medicine from "../models/Medicine";
import MedicalCompany, {IMedicalCompany} from "../models/MedicalCompany";


const MedicineController = {
    getAllMedicines: async (req: Request, res: Response)=>{
        try {
            const medicines = await Medicine.find();
            res.json(medicines);
        }catch(err: any){
            res.status(400).json({message: err.message})
        }
    },
    getMedicine: async (req: Request, res: Response)=>{
        try {
            const {medicineId} = req.params;
            const medicine = await Medicine.findById(medicineId);
            res.json(medicine);
        }catch(err: any){
            res.status(400).json({message: err.message})
        }
    },
    createMedicine: async (req: Request, res: Response)=>{
        try {
            const {medicalCompanyId} = req.body;
            const company = await MedicalCompany.findById(medicalCompanyId) as IMedicalCompany;
            const newMedicine = await Medicine.create({...req.body, medicalCompanyName: company.name});
            res.status(201).json(newMedicine);
        }catch(err: any){
            res.status(400).json({message: err.message})
        }
    },
    editMedicine: async (req: Request, res: Response)=>{
        try {
            const {medicineId} = req.params;
            const {medicalCompanyId} = req.body;
            const company = await MedicalCompany.findById(medicalCompanyId) as IMedicalCompany;
            const updatedMedicine = await Medicine.findByIdAndUpdate(medicineId, {$set: {...req.body, medicalCompanyName: company.name}}, {new: true});
            res.json(updatedMedicine);                
        }catch(err: any){
            res.status(400).json({message: err.message})
        }
    },
    deleteMedicine: async (req: Request, res: Response)=>{
        try {
            const {medicineId} = req.params; 
            await Medicine.findByIdAndDelete(medicineId);
            res.json({message: "Medicine is deleted successfully!"})
        }catch(err: any){
            res.status(400).json({message: err.message})
        }
    },
}

export default MedicineController;