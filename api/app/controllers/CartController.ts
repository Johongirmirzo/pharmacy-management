import {Request, Response} from "express";
import Medicine, {IMedicine} from "../models/Medicine";
import Cart from "../models/Cart";

const CartController = {
    getAllCartItems: async (req: Request, res: Response)=>{
        try {
            const {pharmacistId} = req.params
            const cartItems = await Cart.findOne({pharmacistId});
            res.json(cartItems);
        }catch(err: any) {
            res.status(400).json({message: err.message})
        }
    },
    addToCart: async (req: Request, res: Response)=>{
        console.log("Cart", req.user)
        try {
            
            const {pharmacistId} = req.params;
            const {medicineId, companyName, medicineName, batchNumber, quantity, price} = req.body;
            const medicine = await Medicine.findById(medicineId) as IMedicine;
            const cart = await Cart.findOne({pharmacistId});
            if(medicine.totalInStock < quantity) {
                return res.status(400).json({message: "Medicine is out of stock"})
            }
            if(cart){
                const total = price * quantity;
                cart.orderItems.push({medicineId, companyName, medicineName, batchNumber, quantity, price, total})
                await cart.save();
                console.log("existing cart item")
                res.json(cart.orderItems[cart.orderItems.length - 1]);
            } else {
                const total = price * quantity;
                const newCart = await Cart.create({
                    pharmacistId,
                    orderItems: [{medicineId, companyName, medicineName, batchNumber, quantity, price, total}]
                });
                console.log("New cart item")
                res.status(201).json(newCart.orderItems[newCart.orderItems.length - 1]);
            }
        }catch(err: any) {
            res.status(400).json({message: err.message});
        }
    },
    deleteCart: async (req: Request, res: Response)=>{
        try {
            const {cartId} = req.params;
            await Cart.updateOne({}, {$pull: {orderItems: {_id: cartId}}})
            res.json({message: "Cart Item is successfully deleted!"});
        }catch(err: any) {
            res.status(400).json({message: err.message});
        }
    }
};

export default CartController;