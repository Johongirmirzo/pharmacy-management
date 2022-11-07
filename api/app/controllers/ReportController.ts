import {Request, Response} from "express";
import moment from "moment";
import Pharmacist from "../models/Pharmacist";
import Order, {IOrder} from "../models/Order";
import Medicine from "../models/Medicine";

const ReportController = {
    getStockReports: async (req: Request, res: Response)=>{
        try {
            const {from, to} = req.query;
            if(from && to){
                console.log({from, to})
                const medicines = await Medicine.find();
                const validMedicines = medicines.filter(medicine => {
                    if(moment(medicine.createdAt).isSameOrAfter(moment(from.toString())) &&  
                    moment(medicine.createdAt).isSameOrBefore(moment(to.toString()))){
                        return true;
                    }
                    return false;
                })
                return res.json(validMedicines);
            }
            res.status(400).json({message: "Please provide dates"})
        }catch (err: any){
            res.status(400).json({message: err.message})
        }
    },
    getPharmacistSaleReports: async (req: Request, res: Response)=>{
        try {
            const {pharmacistId} = req.params;
            const {from, to} = req.query;
            if(from && to){
                console.log({from, to, pharmacistId})
                const orders = await Order.find({pharmacistId});
                const filteredOrders = orders.map(order => {
                    return order.orderItems.filter(item => {
                        if(moment(item.soldDate).isSameOrAfter(moment(from.toString())) && 
                        moment(item.soldDate).isSameOrBefore(moment(to.toString()))){
                        return true;
                    }
                    return false;
                    })
                }).flat()
                
                return res.json(filteredOrders);
            }
            res.status(400).json({message: "Please provide dates"})
        }catch (err: any){
            res.status(400).json({message: err.message})
        }
    },
    getSalesReports: async (req: Request, res: Response)=>{
        try {
            const {from, to} = req.query;
            const orders = await Order.find();
            if(from && to){

                const filteredOrders = orders.map(order => {
                    return order.orderItems.filter(item => {
                        if(moment(item.soldDate).isSameOrAfter(moment(from.toString())) && 
                        moment(item.soldDate).isSameOrBefore(moment(to.toString()))){
                    return true;
                    }
                    return false;
                    })
                }).flat()
                console.log("Orders amount", filteredOrders.length)
                return res.json(filteredOrders);
            }
            res.status(400).json({message: "Please provide dates"})
        }catch (err: any){
            res.status(400).json({message: err.message})
        }
    },
    getInvoice: async (req: Request, res: Response)=>{
        try {
            const {invoiceNumber} = req.params;
            const orders = await Order.findOne({invoiceNumber});
            res.json(orders);
        }catch(err: any){
            res.status(400).json({message: err.message})
        }
    },
}
export default ReportController;