import {createSlice} from '@reduxjs/toolkit';
 

export interface IAdminUser {
    adminId: string;
    fullname: string;
    username: string;
    email: string;
    mobileNumber: string;
    isAdmin: boolean;
}


const initialState: IAdminUser = { 
    adminId: "", 
    fullname: "", 
    username: "", 
    email: "", 
    mobileNumber: "", 
    isAdmin: true,
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdmin: (state, {payload: {adminId, fullname, username, email, mobileNumber, isAdmin}})=>{
            state.adminId = adminId;
            state.fullname = fullname;
            state.username = username;
            state.email = email;
            state.mobileNumber = mobileNumber;
            state.isAdmin = isAdmin;
        },
        removeAdmin: (state, action)=>{
            state.adminId = "";
            state.fullname = "";
            state.username = "";
            state.email = "";
            state.mobileNumber = "";
            state.isAdmin = false;
        },
        changeProfile: (state, {payload: {fullname, username, email, mobileNumber}})=>{
            state.fullname = fullname;
            state.username = username;
            state.email = email;
            state.mobileNumber = mobileNumber;
            
        },
        changePassword: (state, action)=>{},
    }
})
export const {setAdmin, removeAdmin, changeProfile, changePassword} = adminSlice.actions;
export default adminSlice.reducer;