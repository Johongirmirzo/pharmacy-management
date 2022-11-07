import {ENDPOINTS} from "../../config/endpoints";
import API from "../index";

const getCustomer = async (customerId: string)=>{
    return API.get(`${ENDPOINTS.GET_CUSTOMER}/${customerId}`)
}
 

export {
    getCustomer,
}