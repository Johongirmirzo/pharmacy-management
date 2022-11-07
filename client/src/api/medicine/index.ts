import {ENDPOINTS} from "../../config/endpoints";
import {API} from "../index";

const getAllMedicines = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_MEDICINES);
}
const getMedicine = async (medicineId: string) =>{
    return await API.get(`${ENDPOINTS.GET_MEDICINE}/${medicineId}`);
}

export {
    getAllMedicines,
    getMedicine
}