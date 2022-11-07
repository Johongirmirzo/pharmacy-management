import {ENDPOINTS} from "../../config/endpoints";
import API from "../index";

interface ILoginData {
    email: string;
    password: string;
}
interface IAdmin {
    fullname: string;
    username: string;
    email: string;
    mobileNumber: string;
}
interface IPharmacist extends IAdmin {
    gender: string;
}
interface ICreatePharmacist extends IPharmacist {
    password: string;
    confirmPassword: string;
}
interface IPassword {
    currentPassword: string;
    newPassword: string;
    newConfirmPassword: string;
}

const login = async (loginData: ILoginData)=>{
    return await API.post(ENDPOINTS.LOGIN, loginData)
}
const logout = async ()=>{
    return await API.delete(ENDPOINTS.LOGOUT)
}
const getAllPharmacists = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_PHARMACISTS)
}
const getPharmacist = async (pharmacistId: string)=>{
    return await API.get(`${ENDPOINTS.GET_PHARMACIST}/${pharmacistId}`);
}
const createPharmacist = async (pharmacistData: ICreatePharmacist)=>{
    return await API.post(ENDPOINTS.CREATE_PHARMACIST, pharmacistData)
}
const editPharmacist = async (pharmacistData: IPharmacist, pharmacistId: string) => {
    return await API.put(`${ENDPOINTS.EDIT_PHARMACIST}/${pharmacistId}`, pharmacistData)
}
const changeProfile = async (profileData: IAdmin, adminId: string) => {
    return await API.post(`${ENDPOINTS.CHANGE_PROFILE}/${adminId}`, profileData)
}
const changePassword = async (passwordData: IPassword, adminId: string) => {
    return await API.post(`${ENDPOINTS.CHANGE_PASSWORD}/${adminId}`, passwordData)
}

export {
    login,
    logout,
    getAllPharmacists,
    getPharmacist,
    createPharmacist,
    editPharmacist,
    changeProfile,
    changePassword
}