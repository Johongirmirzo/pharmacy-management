import {Request, Response, NextFunction} from "express";
import pharmacistRegisterSchema from "../schemas/pharmacistRegisterSchema";
import pharmacistLoginSchema from "../schemas/pharmacistLoginSchema";
import pharmacistEditSchema from "../schemas/pharmacistEditSchema"
import pharmacistProfileSchema from "../schemas/pharmacistProfileSchema"
import pharmacistPasswordSchema from "../schemas/pharmacistPasswordSchema"
import createMedicineSchema from "../schemas/createMedicineSchema"
import editMedicineSchema from "../schemas/editMedicineSchema"
import customerSchema from "../schemas/customerSchema"


const pharmacistRegisterValidator = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        await pharmacistRegisterSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.status(400).json({errors: err.errors});
    }
}
const pharmacistLoginValidator = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        await pharmacistLoginSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.status(400).json({errors: err.errors});
    }
}
const pharmacistEditValidator = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        await pharmacistEditSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.status(400).json({errors: err.errors});
    }
}
const changeProfileValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await pharmacistProfileSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.status(400).json({errors: err.errors});
    }
}
const changePasswordValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await pharmacistPasswordSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.status(400).json({errors: err.errors});
    }
}
const createMedicineValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await createMedicineSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.status(400).json({errors: err.errors});
    }
}
const editMedicineValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await editMedicineSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.status(400).json({errors: err.errors});
    }
}
const customerValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await customerSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.status(400).json({errors: err.errors});
    }

}
export {
    pharmacistRegisterValidator,
    pharmacistLoginValidator,
    pharmacistEditValidator,
    changeProfileValidator,
    changePasswordValidator,
    createMedicineValidator,
    editMedicineValidator,
    customerValidator
}