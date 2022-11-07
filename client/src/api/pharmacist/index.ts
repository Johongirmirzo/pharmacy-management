import {ENDPOINTS} from "../../config/endpoints";
import {API} from "../index";

interface IPharmacistLoginData {
    email: string;
    password: string;
}
interface IPharmacistProfileData {
    fullname: string;
    username: string;
    email: string;
    mobileNumber: string;
}
interface IPharmacistPasswordData {
    currentPassword: string;
    newPassword: string;
    newConfirmPassword: string;
}

const login = async (loginData: IPharmacistLoginData)=>{
    return API.post(ENDPOINTS.LOGIN, loginData)
}
const logout = async ()=>{
    return API.delete(ENDPOINTS.LOGOUT);
}
const changeProfile = async (profileData: IPharmacistProfileData, pharmacistId: string)=>{
    return API.post(`${ENDPOINTS.CHANGE_PROFILE}/${pharmacistId}`, profileData)
}
const changePassword = async (passwordData: IPharmacistPasswordData, pharmacistId: string)=>{
    return API.post(`${ENDPOINTS.CHANGE_PASSWORD}/${pharmacistId}`, passwordData)
}

export {
    login,
    logout,
    changeProfile,
    changePassword
}