import mongoose from "mongoose";

export interface IMedicalCompany extends mongoose.Document {
    name: string;
}

const MedicalCompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model<IMedicalCompany>("MedicalCompany", MedicalCompanySchema);