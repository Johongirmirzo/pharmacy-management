import {Request, Response} from "express";
import bcrypt from "bcrypt"
import Pharmacist, {IPharmacist} from "../models/Pharmacist";
import sanitizeData from "../utils/sanitizeData";
import generateToken from "../utils/generateToken";

export const PharmacistController = {
    login: async (req: Request, res: Response) => {
        try {
            const {email, password} = req.body;
            const pharmacist = await Pharmacist.findOne({email});
            if(!pharmacist){
                return res.status(400).json({message: "Email does not exist!"});
            }
            if(!(await bcrypt.compare(password, pharmacist.password))){
                return res.status(400).json({message: "Wrong credentials!"});
            }
            const accessToken = generateToken({id: pharmacist._id, username: pharmacist.username, isAdmin: pharmacist.isAdmin, expirationTime: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}`})
            const refreshToken = generateToken({id: pharmacist._id, username: pharmacist.username, isAdmin: pharmacist.isAdmin, expirationTime: `${process.env.REFRESH_TOKEN_EXPIRATION_TIME}`})
            res.json({pharmacist, accessToken, refreshToken});
        }catch (err: any) {
            res.status(400).json({message: err.message});
        }
    },
    getAllPharmacists: async (req: Request, res: Response) => {
        try {
            const pharmacists =  await Pharmacist.find({isAdmin: false}, {password: 0, isAdmin: 0});
            res.json(pharmacists);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    getPharmacist: async (req: Request, res: Response)=>{
        try {
            const {pharmacistId} = req.params;
            const pharmacist =  await Pharmacist.findById(pharmacistId, {password: 0})
            res.json(pharmacist);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    createPharmacist: async (req: Request, res: Response) => {
        try {
            const {fullname, username, email, mobileNumber, gender, password} = req.body;
            const hashedPassword = await bcrypt.hash(password, 12);
            const pharmacist = await Pharmacist.create({
                fullname,
                username,
                email,
                mobileNumber,
                gender: gender.toUpperCase(),
                password: hashedPassword
            })
            res.status(201).json({_id: pharmacist._id, fullname, username, email, mobileNumber, gender});
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    editPharmacist: async (req: Request, res: Response) => {
        try {
            const {pharmacistId} = req.params;
            const pharmacist = await Pharmacist.findById(pharmacistId);
            if(!pharmacist){
                return  res.status(404).json({message: "Pharmacist not found!"});
            }
            const updatedUser = await Pharmacist.findByIdAndUpdate(pharmacist._id, {$set: {...req.body}}, {new: true});
            res.json(updatedUser);
        }catch(err: any){
            console.log(err)
            res.status(400).json({message: err.message});
        }
    },
    deletePharmacist: async (req: Request, res: Response) => {
        try {
            const {pharmacistId} = req.params;
            const pharmacist = await Pharmacist.findById(pharmacistId);
            console.log("Delete Pharmacist",pharmacistId, pharmacist)
            if(!pharmacist){
                return res.status(404).json({message: "Pharmacist not found!"});
            }
            await pharmacist.delete();
            res.json({message: "Pharmacist deleted successfully!"});
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    logout: async (req: Request, res: Response) => {
        res.json({message: "Pharmacist logged out successfully!"});
    },
    changeProfile: async (req: Request, res: Response) => {
        try {
            const {pharmacistId} = req.params;
            const pharmacist = await Pharmacist.findById(pharmacistId);
            if(!pharmacist){
                return  res.status(404).json({message: "Pharmacist not found!"});
            }
            const updatedUser = await Pharmacist.findByIdAndUpdate(pharmacist._id, {$set: {...req.body}}, {new: true});
            res.json(updatedUser);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    changePassword: async (req: Request, res: Response) => {
        try {
            const {pharmacistId} = req.params;
            const {currentPassword, newPassword} = req.body;
            const pharmacist = await Pharmacist.findById(pharmacistId);
            if(!pharmacist){
                return res.status(404).json({message: "Pharmacist does not exist!"})
            }
            if(!(await bcrypt.compare(currentPassword, pharmacist.password))){
                return res.status(400).json({message: "Incorrect Password!"})
            }
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            pharmacist.password = hashedPassword;
            await pharmacist.save();
            res.status(201).json({message: "Password changed successfully"})
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
       
}