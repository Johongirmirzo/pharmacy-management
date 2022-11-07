import React from "react";
import InventoryTable from "./InventoryTable";
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
      <InventoryTable />
    </MedicineInventorySection>
  );
};

export default MedicineInventory;
