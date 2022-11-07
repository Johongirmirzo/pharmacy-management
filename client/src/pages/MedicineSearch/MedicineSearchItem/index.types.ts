import {IMedicine} from "../../../redux/medicine";

export type MedicineSearchItemProps = {
    medicine: IMedicine;
    addMedicineToCart: (medicineAmount: number)=> void;
}