import {ENDPOINTS} from "../../config/endpoints";
import API from "../index";

interface IPharmacistDate {
    from: string;
    to: string;
} 

interface IPharmacistReport extends IPharmacistDate {
    pharmacistId: string;
}

const getStockReport = async ({from, to}: IPharmacistDate)=>{
    return await API.get(`${ENDPOINTS.GET_STOCK_REPORT}?from=${from}&to=${to}`)
}
const getPharmacistSalesReport = async ({from, to, pharmacistId}: IPharmacistReport)=>{
    return await API.get(`${ENDPOINTS.GET_PHARMACIST_SALES_REPORT}/${pharmacistId}?from=${from}&to=${to}`)
}
const getSalesReport = async ({from, to}: IPharmacistDate)=>{
    return await API.get(`${ENDPOINTS.GET_SALES_REPORT}?from=${from}&to=${to}`)
}
const getOrderInvoice = async (invoiceNumber: string)=>{
    return API.get(`${ENDPOINTS.GET_ORDER_INVOICE}/${invoiceNumber}`)
}

export {
    getStockReport,
    getPharmacistSalesReport,
    getSalesReport,
    getOrderInvoice
}