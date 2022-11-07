import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { OrdersTitle } from "./index.styled";
import { OrdersTableProps } from "./index.types";

const OrdersTable = ({ orders }: OrdersTableProps) => {
  return orders.length > 0 ? (
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
  ) : (
    <OrdersTitle>No orders has been made yet!</OrdersTitle>
  );
};

export default OrdersTable;
