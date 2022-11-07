import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { MedicineInventoryTableTitle } from "./index.styled";
import { MedicineInventoryTableProps } from "./index.types";

const MedicineInventoryTable = ({ medicines }: MedicineInventoryTableProps) => {
  return medicines.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>MEDICAL COMPANY</Th>
          <Th>MEDICINE NAME</Th>
          <Th>MEDICINE BATCH NUMBER</Th>
          <Th>MEDICINE QUANTITY SOLD</Th>
          <Th>MEDICINE REMAINING QUANTITY</Th>
        </Tr>
      </Thead>
      <Tbody>
        {medicines.map((medicine, index) => (
          <Tr key={medicine._id}>
            <Td>{index + 1}</Td>
            <Td>{medicine.medicalCompanyName}</Td>
            <Td>{medicine.medicineName}</Td>
            <Td>{medicine.batchNumber}</Td>
            <Td>{medicine.quantitySold}</Td>
            <Td>
              {medicine.totalInStock === 0 ? (
                <span>Out of stock!</span>
              ) : (
                medicine.totalInStock
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <MedicineInventoryTableTitle>
      No medicines has been added yet!
    </MedicineInventoryTableTitle>
  );
};

export default MedicineInventoryTable;
