import React from "react";
import MedicineInventoryTable from "./MedicineInventoryTable";
import {
  MedicineInventorySection,
  MedicineInventoryHeader,
  MedicineInventoryTitle,
} from "./index.styled";

const MedicineInventory = () => {
  return (
    <MedicineInventorySection>
      <MedicineInventoryHeader>
        <MedicineInventoryTitle>Medicine Invetory</MedicineInventoryTitle>
      </MedicineInventoryHeader>
      <MedicineInventoryTable />
    </MedicineInventorySection>
  );
};

export default MedicineInventory;
