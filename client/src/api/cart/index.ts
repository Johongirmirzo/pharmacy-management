import {ENDPOINTS} from "../../config/endpoints";
import {API} from "../index";

interface ICartItem {
    medicineId: string;
    companyName: string; 
    medicineName: string; 
    batchNumber: string;
    quantity: number; 
    price: number; 
}

const getAllCartItems = async (pharmacistId: string) => {
    return await API.get(`${ENDPOINTS.GET_ALL_CART_ITEMS}/${pharmacistId}`)
}
const addItemToCart = async (cartItemData: ICartItem, pharmacistId: string)=>{
    return await API.post(`${ENDPOINTS.ADD_ITEM_TO_CART}/${pharmacistId}`, cartItemData)
}
const deleteCartItem = async (cartId: string) => {
    return await API.delete(`${ENDPOINTS.DELETE_CART_ITEM}/${cartId}`)
}

export {
    getAllCartItems,
    addItemToCart,
    deleteCartItem
}