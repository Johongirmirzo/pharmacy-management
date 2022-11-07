import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { InvoiceSearchCustomerTableProps } from "./index.types";

const InvoiceSearchCustomerTable = ({
  order,
}: InvoiceSearchCustomerTableProps) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Customer Name</Th>
          <Th>Customer Mobile Number</Th>
          <Th>Customer Pay Mode</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{order.customerName}</Td>
          <Td>{order.customerMobileNumber}</Td>
          <Td>{order.customerPayMode}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default InvoiceSearchCustomerTable;
