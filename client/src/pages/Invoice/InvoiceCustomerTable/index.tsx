import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { InvoiceTableProps } from "../index.types";

const InvoiceCustomerTable = ({ order }: InvoiceTableProps) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>CUSTOMER NAME</Th>
          <Th>CUSTOMER MOBILE NUMBER</Th>
          <Th>CUSTOMER PAY MODE</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Td>1</Td>
        <Td>{order.customerName}</Td>
        <Td>{order.customerMobileNumber}</Td>
        <Td>{order.customerPayMode}</Td>
      </Tbody>
    </Table>
  );
};

export default InvoiceCustomerTable;
