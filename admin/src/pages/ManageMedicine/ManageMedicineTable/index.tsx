import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
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
import {
  ManageMedicineBtn,
  ManageMedicineTitle,
  ManageMedicineOutofStock,
} from "./index.styled";

const ManageMedicineTable = () => {
  const medicines = useSelector((state: RootState) => state.medicine.medicines);

  return medicines.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Medical Company</Th>
          <Th>Medicine Name</Th>
          <Th>Medicine Batch Number</Th>
          <Th>Quantity Sold</Th>
          <Th>Quantity In Stock</Th>
          <Th>Price</Th>
          <Th>Action</Th>
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
                <ManageMedicineOutofStock>
                  Out of stock!
                </ManageMedicineOutofStock>
              ) : (
                medicine.totalInStock
              )}
            </Td>
            <Td>{medicine.price}</Td>
            <Td>
              <ManageMedicineBtn>
                <Link to={`/editMedicine/${medicine._id}`}>
                  <FaRegEdit />
                </Link>
              </ManageMedicineBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageMedicineTitle>No medicines has been added yet!</ManageMedicineTitle>
  );
};

export default ManageMedicineTable;
