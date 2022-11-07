import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { IOrderInvoice } from "../index.types";

type InvoiceSearchTableProps = {
  order: IOrderInvoice;
};

const InvoiceSearchTable = ({ order }: InvoiceSearchTableProps) => {
  const calculateOrderTotal = () => {
    return order.orderItems.reduce((total, currEl) => total + currEl.total, 0);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>MEDICINE NAME</Th>
          <Th>QUANTITY</Th>
          <Th>PRICE</Th>
          <Th>TOTAL</Th>
        </Tr>
      </Thead>
      <Tbody>
        {order.orderItems.map((order, index) => (
          <Tr key={order._id}>
            <Td>{index + 1}</Td>
            <Td>{order.medicineName}</Td>
            <Td>{order.quantity}</Td>
            <Td>{order.price}</Td>
            <Td>${order.total}</Td>
          </Tr>
        ))}
        <Tr>
          <Td>
            <b>Grand Total</b>
          </Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td>
            <strong>${calculateOrderTotal()}</strong>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default InvoiceSearchTable;
