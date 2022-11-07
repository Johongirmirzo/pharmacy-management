import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { OrderTableProps } from "./index.types";

const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Customer Name</Th>
          <Th>Customer Mobile Number</Th>
          <Th>Customer Pay Mode</Th>
          <Th>Order Invoice Number</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders.map((order, index) => (
          <Tr key={order._id}>
            <Td>{index + 1}</Td>
            <Td>{order.customerName}</Td>
            <Td>{order.customerMobileNumber}</Td>
            <Td>{order.customerPayMode}</Td>
            <Td>{order.invoiceNumber}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default OrderTable;
