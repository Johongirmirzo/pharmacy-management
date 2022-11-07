import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { InvoiceTableBox } from "./index.styled";
import { InvoiceTableProps } from "../index.types";

const InvoiceTable = ({ order, componentRef }: InvoiceTableProps) => {
  const calculateOrderTotal = () => {
    return order.orderItems.reduce((total, currEl) => total + currEl.total, 0);
  };

  return (
    <>
      <Document>
        <Page>
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
              {order.orderItems.map((cartItem, index) => (
                <Tr key={cartItem._id}>
                  <Td>{index + 1}</Td>
                  <Td>{cartItem.medicineName}</Td>
                  <Td>{cartItem.quantity}</Td>
                  <Td>{cartItem.price}</Td>
                  <Td>${cartItem.total}</Td>
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
        </Page>
      </Document>
    </>
  );
};

export default InvoiceTable;
