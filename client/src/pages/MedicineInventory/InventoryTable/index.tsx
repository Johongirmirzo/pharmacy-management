import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { InventoryTableOutofStock, InventoryTableTitle } from "./index.styled";

const InventoryTable = () => {
  const medicines = useSelector((state: RootState) => state.medicine.medicines);
  return medicines.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>MEDICAL COMPANY</Th>
          <Th>MEDICINE NAME</Th>
          <Th>BATCH NUMBER</Th>
          <Th>QUANTITY SOLD</Th>
          <Th>REMAINING QUANTITY</Th>
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
                <InventoryTableOutofStock>
                  Out of stock!
                </InventoryTableOutofStock>
              ) : (
                medicine.totalInStock
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <InventoryTableTitle>No medicines has been added yet!</InventoryTableTitle>
  );
};

export default InventoryTable;
