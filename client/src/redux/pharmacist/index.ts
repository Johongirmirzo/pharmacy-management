import {createSlice} from "@reduxjs/toolkit";

export interface IPharmacist {
    pharmacistId: string;
    fullname: string;
    username: string;
    email: string;
    mobileNumber: string;
    gender: string;
}

const initialState: IPharmacist = {
    pharmacistId: "",
    fullname: "",
    username: "",
    email: "",
    mobileNumber: "",
    gender: "",
}

const pharmacistSlice = createSlice({
    name: "pharmacist",
    initialState,
    reducers: {
        storePharmacist: (state, {payload: {pharmacist}}) =>{
            console.log(pharmacist)
            state.pharmacistId = pharmacist.pharmacistId;
            state.fullname = pharmacist.fullname;
            state.username = pharmacist.username;
            state.email = pharmacist.email;
            state.mobileNumber = pharmacist.mobileNumber;
            state.gender = pharmacist.gender;
        },
        removePharmacist: (state, action) =>{
            state.pharmacistId = "";
            state.fullname = "";
            state.username = "";
            state.email = "";
            state.mobileNumber = "";
            state.gender = "";
        },
        changeProfile: (state, {payload: {pharmacist}})=>{
            state.fullname = pharmacist.fullname;
            state.username = pharmacist.username;
            state.email = pharmacist.email;
            state.mobileNumber = pharmacist.mobileNumber;
        },
    }
})

export const {storePharmacist, removePharmacist, changeProfile} = pharmacistSlice.actions;
export default pharmacistSlice.reducer;