import {createSlice} from "@reduxjs/toolkit";

export interface IOrderItems {
    _id: string;
    medicineId: string;
    companyName: string;
    medicineName: string;
    batchNumber: string;
    quantity: number;
    price: number;
    total: number;
    soldDate: string;
}

export interface IOrder {
    _id: string;
    customerId: string;
    pharmacistId: string;
    invoiceNumber: string;
    customerName: string;
    customerMobileNumber: string;
    customerPayMode: string;
    orderItems: IOrderItems[]
}

interface IOrderList {
    orders: IOrder[];
}

const initialState: IOrderList = {
    orders: []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        storeAllOrders: (state, {payload: {orders}})=>{
            state.orders = [...orders];
        },
        addOrder: (state, {payload: {newOrder}})=>{
            state.orders.push(newOrder)
        }
    }
})

export const {storeAllOrders, addOrder} = orderSlice.actions;
export default orderSlice.reducer;