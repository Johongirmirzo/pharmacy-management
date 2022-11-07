import {Request, Response} from "express";
import Customer from "../models/Customer";

const CustomerController = {
    getAllCustomers: async (req: Request, res: Response)=>{
        try {
            const customers = await Customer.find();
            res.json(customers);
        }catch (err: any) {
            res.status(400).json({message: err.message});
        }
    },
    getCustomer: async (req: Request, res: Response) => {
        try {
            const {customerId} = req.params;
            const customer = await Customer.findById(customerId);
            res.json(customer);
        }catch (err: any) {
            res.status(400).json({message: err.message});
        }
    },
    editCustomer: async (req: Request, res: Response)=>{
        try {
            const {customerId} = req.params;
            const {customerName, customerMobileNumber, customerPayMode} = req.body;
            const updatedCustomer = await Customer.findByIdAndUpdate(
                customerId,
                {$set: {name: customerName, mobileNumber: customerMobileNumber, paymentType: customerPayMode}},
                {new: true}
            );
            res.json(updatedCustomer);
        }catch (err: any) {
            res.status(400).json({message: err.message});
        }
    },
    deleteCustomer: async (req: Request, res: Response)=>{
        try {
            const {customerId} = req.params;
        }catch (err: any) {
            res.status(400).json({message: err.message});
        }
    },
}

export default CustomerController;