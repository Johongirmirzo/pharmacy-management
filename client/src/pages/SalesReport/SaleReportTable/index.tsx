import React from "react";
import moment from "moment";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { SalesReportTableProps } from "./index.types";

const SalesReportTable = ({ saleReports }: SalesReportTableProps) => {
  const calculateOrderTotal = () => {
    return saleReports.reduce((total, currEl) => total + currEl.total, 0);
  };

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>SALE DATE</Th>
            <Th>MEDICINE & BATCH NO</Th>
            <Th>QUANTITY SOLD</Th>
            <Th>PRICE</Th>
            <Th>TOTAL</Th>
          </Tr>
        </Thead>
        <Tbody>
          {saleReports.map((saleReport, index) => (
            <Tr key={saleReport._id}>
              <Td>{index + 1}</Td>
              <Td>{moment(saleReport.soldDate).format("yyyy/MM/DD")}</Td>
              <Td>
                {saleReport.medicineName} #{saleReport.batchNumber}
              </Td>
              <Td>{saleReport.quantity}</Td>
              <Td>{saleReport.price}</Td>
              <Td>${saleReport.total}</Td>
            </Tr>
          ))}
          <Tr>
            <Td>
              <strong>Grand Total</strong>
            </Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <strong>${calculateOrderTotal()}</strong>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default SalesReportTable;
