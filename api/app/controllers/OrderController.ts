import {Request, Response} from "express";
import {v4 as uuidv4} from "uuid";
import Medicine, {IMedicine} from "../models/Medicine";
import Cart, {ICartOrderItem} from "../models/Cart";
import Customer from "../models/Customer";
import Order from "../models/Order";


const OrderController = {
    createOrder: async (req: Request, res: Response)=>{
        try {
            const {pharmacistId} = req.params;
            const {customerName, customerMobileNumber, customerPayMode, orderItems} = req.body;
            const items: ICartOrderItem[]  = orderItems
            const soldOrderItems = items.map((item) => ({...item, soldDate: new Date()}));
            const invoiceNumber = uuidv4();
            
            // updating medicine with how many medicines sold
            soldOrderItems.forEach(async (item) =>{
                const medicine = await Medicine.findById(item.medicineId) as IMedicine;
                if(medicine){
                    medicine.quantitySold += item.quantity;
                    medicine.totalInStock -= item.quantity;
                    await medicine.save();
                }
            })

            const customer = await Customer.create({
                name: customerName,
                mobileNumber: customerMobileNumber,
                paymentType: customerPayMode.toUpperCase()
            });
            const order = await Order.create({
                pharmacistId,
                customerId: customer._id,
                invoiceNumber,
                orderItems: soldOrderItems
            })
            await Cart.deleteMany({pharmacistId})
            res.status(201).json({
                customerName,
                customerMobileNumber,
                customerPayMode,
                order
            });
        }catch(err: any) {
            res.status(400).json({message: err.message});
        }
    },
    getAllOrders: async (req: Request, res: Response)=>{
        try {
            const orders = await Order.find();
            res.json(orders);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    getOrder: async (req: Request, res: Response)=>{
        try {
            const {orderId} = req.params;
            const order = await Order.findById(orderId);
            res.json(order);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    getPharmacistOrders: async (req: Request, res: Response)=>{
        try {
            const {pharmacistId} = req.params;
            const allOrders = await Order.find({pharmacistId});
            res.json(allOrders);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    }
    
};

export default OrderController;