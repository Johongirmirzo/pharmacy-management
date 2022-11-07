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
import { ManagePharmacistBtn, ManagePharmacistTitle } from "./index.styled";

const ManagePharmacistTable = () => {
  const { pharmacists } = useSelector((state: RootState) => state.pharmacists);

  return pharmacists.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th scope="col">No.</Th>
          <Th scope="col">Full Name</Th>
          <Th scope="col">Username</Th>
          <Th scope="col">Email</Th>
          <Th scope="col">Mobile Number</Th>
          <Th scope="col">Gender</Th>
          <Th scope="col">Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {pharmacists.map((pharmacist, index) => (
          <Tr key={pharmacist._id}>
            <Td>{index + 1}</Td>
            <Td>{pharmacist.fullname}</Td>
            <Td>{pharmacist.username}</Td>
            <Td>{pharmacist.email}</Td>
            <Td>{pharmacist.mobileNumber}</Td>
            <Td>{pharmacist.gender}</Td>
            <Td>
              <ManagePharmacistBtn>
                <Link to={`/editPharmacist/${pharmacist._id}`}>
                  <FaRegEdit />
                </Link>
              </ManagePharmacistBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManagePharmacistTitle>
      No pharmacist has been added yet!
    </ManagePharmacistTitle>
  );
};

export default ManagePharmacistTable;
