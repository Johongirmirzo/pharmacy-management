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
        },
        createMedicine: (state, {payload: {newMedicine}})=>{
            state.medicines.push(newMedicine)
        },
        editMedicine: (state, {payload: {editedMedicine}})=>{
            state.medicines = state.medicines.map(medicine => medicine._id === editedMedicine._id ? editedMedicine : medicine);
        }
    }
})
export const {storeAllMedicines, createMedicine, editMedicine} = medicineSlice.actions;
export default medicineSlice.reducer;