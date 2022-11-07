import {ENDPOINTS} from "../../config/endpoints";
import API from "../index";

const getAllCompanies = async ()=>{
    return API.get(ENDPOINTS.GET_ALL_COMPANIES);
}
const getCompany = async (companyId: string)=>{
    return API.get(`${ENDPOINTS.GET_COMPANY}/${companyId}`)
}
const createCompany = async (name: string)=>{
    return API.post(ENDPOINTS.CREATE_COMPANY, {name})
}
const editCompany = async (name: string, companyId: string)=>{
    return API.put(`${ENDPOINTS.EDIT_COMPANY}/${companyId}`, {name})
}
export {
    getAllCompanies,
    getCompany,
    createCompany,
    editCompany
}