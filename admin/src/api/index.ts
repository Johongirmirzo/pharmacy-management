import axios from "axios";
import {BASE_URL} from "../config/endpoints";
import {getToken} from "../utils/localStorage";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

API.interceptors.request.use(config =>{
    const token = getToken();
    if(token){
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token.accessToken}`,
            RefreshToken: `Bearer ${token.refreshToken}`,
        }
    }
    return config;
})

export default API;