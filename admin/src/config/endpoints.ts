// const BASE_URL = "https://pharmacy-maanagement-app.onrender.com/api";
const BASE_URL = "http://localhost:8800/api";

const ENDPOINTS = {
    LOGIN: "/auth/pharmacist/admin/login",
    LOGOUT: "/auth/pharmacist/logout",
    CHANGE_PROFILE: "/auth/pharmacist/changeProfile",
    CHANGE_PASSWORD: "/auth/pharmacist/changePassword",
    
    GET_ALL_PHARMACISTS: "/auth/pharmacist/getAllPharmacists",
    GET_PHARMACIST: "/auth/pharmacist/getPharmacist",
    CREATE_PHARMACIST: "/auth/pharmacist/createPharmacist",
    EDIT_PHARMACIST: "/auth/pharmacist/editPharmacist",
    DELETE_PHARMACIST: "/auth/pharmacist/deletePharmacist",
    
    GET_ALL_ORDERS: "/order/getAllOrders",

    GET_ALL_CUSTOMERS: "/customer/getAllCustomers",
    GET_CUSTOMER: "/customer/getCustomer",

    GET_ALL_COMPANIES: "/company/getAllCompanies",
    GET_COMPANY: "/company/getCompany",
    CREATE_COMPANY: "/company/createCompany",
    EDIT_COMPANY: "/company/editCompany",

    GET_ALL_MEDICINES: "/medicine/getAllMedicines",
    GET_MEDICINE: "/medicine/getMedicine",
    CREATE_MEDICINE: "/medicine/createMedicine",
    EDIT_MEDICINE: "/medicine/editMedicine",
    
    GET_STOCK_REPORT: "/report/stockReport",
    GET_ORDER_INVOICE: "/report/invoice",
    GET_PHARMACIST_SALES_REPORT: "/report/pharmacistSaleReport",
    GET_SALES_REPORT: "/report/salesReport",

}

export {BASE_URL, ENDPOINTS};