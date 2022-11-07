import {BASE_URL} from "../config/endpoints";
import axios from "axios";
import {getToken} from "../util/localStorage"

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

API.interceptors.request.use(config =>{
    const token = getToken();
    if(token){
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token.accessToken}`,
            Refreshtoken: `Bearer ${token.refreshToken}`,
        }
    }
    return config;
})

export {API}