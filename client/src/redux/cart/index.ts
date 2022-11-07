import {createSlice} from "@reduxjs/toolkit";

export interface ICartItem {
    _id: string;
    medicineId: string;
    companyName: string; 
    medicineName: string; 
    batchNumber: string
    quantity: number; 
    price: number; 
    total: number;
}
interface ICartItemList {
    cartItems: ICartItem[];
}
const initialState: ICartItemList = {
    cartItems: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        storeAllCartItems: (state, {payload: {cartItems}})=>{
            state.cartItems = [...cartItems]
        },
        addToCart: (state, {payload: {newCartItem}})=>{
            state.cartItems.push(newCartItem);
        },
        deleteCartItem: (state, {payload: {cartItemId}})=>{
            state.cartItems = state.cartItems.filter(cartItem => cartItem._id !== cartItemId);
        },
        clearCart: (state, action) => {
            state.cartItems = []
        }
    }
})

export const {storeAllCartItems, addToCart, deleteCartItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;