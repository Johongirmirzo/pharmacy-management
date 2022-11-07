import {createSlice} from "@reduxjs/toolkit";

export interface IMedicine {
    _id: string;
    medicalCompanyName: string;
    medicineName: string;
    medicalCompanyId: string;
    batchNumber: string;
    releaseDate: string;
    expireDate: string;
    quantitySold: number;
    totalInStock: number;
    price: number;
}

export interface IMedicineList {
    medicines: IMedicine[];
}

const initialState: IMedicineList = {
    medicines: [],
}

const medicineSlice = createSlice({
    name: "medicine",
    initialState,
    reducers: {
        storeAllMedicines: (state, {payload: {medicines}})=>{
            state.medicines = [...medicines];
        }
    }
})
export const {storeAllMedicines} = medicineSlice.actions;
export default medicineSlice.reducer;