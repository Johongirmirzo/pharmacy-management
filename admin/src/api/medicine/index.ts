import {ENDPOINTS} from "../../config/endpoints";
import API from "../index";

interface IMedicine {
    medicalCompanyId: string;
    medicineName: string;
    batchNumber: string;
    releaseDate: string;
    expireDate: string;
    totalInStock: number;
    price: number;
}

const getAllMedicines = async ()=>{
    return API.get(ENDPOINTS.GET_ALL_MEDICINES);
}
const getMedicine = async (medicineId: string)=>{
    return API.get(`${ENDPOINTS.GET_MEDICINE}/${medicineId}`)
}
const createMedicine = async (medicineData: IMedicine)=>{
    return API.post(ENDPOINTS.CREATE_MEDICINE, medicineData);
}
const editMedicine = async (medicineData: IMedicine, medicineId: string)=>{
    return API.put(`${ENDPOINTS.EDIT_MEDICINE}/${medicineId}`, medicineData)
}

export {
    getAllMedicines,
    getMedicine,
    createMedicine,
    editMedicine
}