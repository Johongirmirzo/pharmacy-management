import {Request, Response} from "express";
import MedicalCompany from "../models/MedicalCompany";

const CompanyController = {
    getAllMedicalCompanies: async (req: Request, res: Response) => {
        try {
            const companies = await MedicalCompany.find();
            res.json(companies);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    getCompany: async (req: Request, res: Response) => {
        try {
            const {companyId} = req.params;
            const company = await MedicalCompany.findById(companyId);
            res.json(company);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    createMedicalCompany: async (req: Request, res: Response) => {
        try {
            const {name} = req.body;
            if(!name || name.trim().length < 2){
                return res.status(400).json({message: "Minimum medical company name length is 2"})
            }
            if(name.trim().length > 100){
                return res.status(400).json({message: "Maximum medical company name length is 100"})
            }
            const company = await MedicalCompany.create({name});
            res.status(201).json(company);
        }catch(err: any){
            res.status(400).json({message: err.message});   
        }
    },
    editMedicalCompany: async (req: Request, res: Response) => {
        try {
            const {companyId} = req.params;
            const {name} = req.body;
            if(!name || name.trim().length < 2){
                return res.status(400).json({message: "Minimum medical company name length is 2"})
            }
            if(name.trim().length > 100){
                return res.status(400).json({message: "Maximum medical company name length is 100"})
            }
            const updatedCompany = await MedicalCompany.findByIdAndUpdate(companyId, {$set: {name}}, {new: true});
            res.json(updatedCompany);
        }catch(err: any){
            res.status(400).json({message: err.message});   
        }
    },
    deleteMedicalCompany: async (req: Request, res: Response) => {
        try{
            const {companyId} = req.params;
            await MedicalCompany.findByIdAndDelete(companyId);
            res.json({message: "Medical Company is deleted successfully!"})
        }catch(err: any){
            res.status(400).json({message: err.message});   
        }
    },
};

export default CompanyController;