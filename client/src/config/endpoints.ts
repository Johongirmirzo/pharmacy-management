const BASE_URL = "https://pharmacy-maanagement-app.onrender.com/api";

const ENDPOINTS = {
    LOGIN: "/auth/pharmacist/login",
    LOGOUT: "/auth/pharmacist/logout",
    CHANGE_PROFILE: "/auth/pharmacist/changeProfile",
    CHANGE_PASSWORD: "/auth/pharmacist/changePassword",

    GET_ALL_ORDERS: "/order/getPharmacistOrders",
    CREATE_ORDER: "/order/createOrder",

    GET_CUSTOMER: "/customer/getCustomer",

    GET_ALL_MEDICINES: "/medicine/getAllMedicines",
    GET_MEDICINE: "/medicine/getMedicine",
    
    GET_ORDER_INVOICE: "/report/invoice",
    GET_SALES_REPORT: "/report/pharmacistSaleReport",

    GET_ALL_CART_ITEMS: "/cart/getAllCartItems",
    ADD_ITEM_TO_CART: "/cart/addToCart",
    DELETE_CART_ITEM: "/cart/deleteCartItem"

}

export {BASE_URL, ENDPOINTS};