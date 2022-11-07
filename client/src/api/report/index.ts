import {ENDPOINTS} from "../../config/endpoints";
import {API} from "../index";

interface IPharmacistDate {
    from: string;
    to: string;
} 

const getSalesReport = async ({from, to}: IPharmacistDate, pharmacistId: string) => {
    return await API.get(`${ENDPOINTS.GET_SALES_REPORT}/${pharmacistId}?from=${from}&to=${to}`)
}
const getOrderInvoice = async (invoiceNumber: string)=>{
    return API.get(`${ENDPOINTS.GET_ORDER_INVOICE}/${invoiceNumber}`)
}

export {
    getSalesReport,
    getOrderInvoice
}