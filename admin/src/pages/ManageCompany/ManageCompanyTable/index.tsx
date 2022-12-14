import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { ManageCompanyBtn, ManageCompanyTitle } from "./index.styled";
import { ManageCompanyTableProps } from "./index.types";

const ManageCompanyTable = ({ companies }: ManageCompanyTableProps) => {
  return companies.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Company Name</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {companies.map((company, index) => (
          <Tr key={company._id}>
            <Td>{index + 1}</Td>
            <Td>{company.name}</Td>
            <Td>
              <ManageCompanyBtn>
                <Link to={`/editCompany/${company._id}`}>
                  <FaRegEdit />
                </Link>
              </ManageCompanyBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageCompanyTitle>No companies has been added yet!</ManageCompanyTitle>
  );
};

export default ManageCompanyTable;
