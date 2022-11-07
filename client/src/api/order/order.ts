import {ENDPOINTS} from "../../config/endpoints";
import {API} from "../index";

interface IOrderItems {
    medicineId: string;
    companyName: string;
    medicineName: string;
    batchNumber: string;
    quantity: number;
    price: number;
    total: number;
}

interface ICartItems {
    customerName: string;
    customerMobileNumber: string;
    customerPayMode: string;
    orderItems: IOrderItems[]
}

const createOrder = async (cartItems: ICartItems, pharmacistId: string)=>{
    return await API.post(`${ENDPOINTS.CREATE_ORDER}/${pharmacistId}`, cartItems)
}
const getAllPharmacistOrders = async (pharmacistId: string)=>{
    return await API.get(`${ENDPOINTS.GET_ALL_ORDERS}/${pharmacistId}`)
}
const getOrder = async ()=>{

}
export {
    createOrder,
    getAllPharmacistOrders,
    getOrder
}