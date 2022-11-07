import {createSlice} from "@reduxjs/toolkit";

export interface IPharmacist {
    _id: string;
    fullname: string;
    username: string;
    email: string;
    mobileNumber: string;
    gender: string;
}
export interface IPharmacistList {
    pharmacists: IPharmacist[];
}

const initialState: IPharmacistList = {
    pharmacists: [],
}

const pharmacistSlice = createSlice({
    name: "pharmacist",
    initialState,
    reducers: {
        storeAllPharmacists: (state, {payload: {pharmacists}}) =>{
            state.pharmacists = [...pharmacists]
        },
        createPharmacist: (state, {payload: {pharmacist}})=>{
            state.pharmacists.push(pharmacist);
        },
        editPharmacist: (state, {payload: {editedPharmacist}})=>{
            state.pharmacists = state.pharmacists.map(pharmacist => 
                pharmacist._id === editedPharmacist._id ? editedPharmacist : pharmacist
            )
        },
    }
})

export const {storeAllPharmacists, createPharmacist, editPharmacist} = pharmacistSlice.actions;
export default pharmacistSlice.reducer;