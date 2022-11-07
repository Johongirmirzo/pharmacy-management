import {ENDPOINTS} from "../../config/endpoints";
import API from "../index";

const getAllOrders = async ()=>{
    return API.get(ENDPOINTS.GET_ALL_ORDERS);
}


export {
    getAllOrders
};