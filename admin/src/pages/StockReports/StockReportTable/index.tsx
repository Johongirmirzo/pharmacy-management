import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { StockReportTableProps } from "./index.types";
import { IMedicine } from "../../../redux/medicine";

const StockReportTable = ({ stockReports }: StockReportTableProps) => {
  const [stockReportData, setStockReportData] = useState<IMedicine[]>([]);

  useEffect(() => {
    setStockReportData(stockReports);
  }, [stockReports]);

  console.log(stockReports);
  return (
    <>
      {stockReportData.length > 0 && (
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
            </Tr>
          </Thead>
          <Tbody>
            {stockReportData.map((stockReport, index) => (
              <Tr key={stockReport._id}>
                <Td>{index + 1}</Td>
                <Td>{stockReport.medicalCompanyName}</Td>
                <Td>{stockReport.medicineName}</Td>
                <Td>{stockReport.batchNumber}</Td>
                <Td>{stockReport.quantitySold}</Td>
                <Td>{stockReport.totalInStock}</Td>
                <Td>${stockReport.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default StockReportTable;
