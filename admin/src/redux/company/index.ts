import {createSlice} from "@reduxjs/toolkit";

export interface IMedicalCompany {
    _id: string;
    name: string;
}
export interface IMedicalCompanyList {
    companies: IMedicalCompany[]
}

const initialState: IMedicalCompanyList = {
    companies: [],
}

const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        storeAllCompanies: (state, {payload: {companies}})=>{
            state.companies = [...companies]
        },
        createCompany: (state, {payload: {newCompany}})=>{
            state.companies.push(newCompany);
        },
        editCompany: (state, {payload: {editedCompany}})=>{
            state.companies = state.companies.map(company => 
                company._id === editedCompany._id ? editedCompany : company
        )
        },
    }
})
export const {storeAllCompanies, createCompany, editCompany} = companySlice.actions;
export default companySlice.reducer;