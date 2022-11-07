import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { PharmacistReportTableProps } from "./index.types";
import { ISaleReport } from "../index.types";

const PharmacistReportTable = ({
  salesByPharmacist,
  pharmacistName,
}: PharmacistReportTableProps) => {
  const [pharmacistSalesData, setPharmacistSaleData] = useState<ISaleReport[]>(
    []
  );

  useEffect(() => {
    setPharmacistSaleData(salesByPharmacist);
  }, [salesByPharmacist]);

  const calculateTotalSales = () => {
    return pharmacistSalesData.reduce(
      (total, currEl) => total + currEl.total,
      0
    );
  };
  return (
    <>
      {pharmacistSalesData.length > 0 && (
        <Table>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>MEDICINE & BATCH NO</Th>
              <Th>QUANTITY SOLD</Th>
              <Th>PRICE</Th>
              <Th>TOTAL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pharmacistSalesData.map((sale, index) => (
              <Tr key={index.toString()}>
                <Td>{index + 1}</Td>
                <Td>
                  {sale.medicineName} #{sale.batchNumber}
                </Td>
                <Td>{sale.quantity}</Td>
                <Td>{sale.price}</Td>
                <Td>${sale.total}</Td>
              </Tr>
            ))}
            <Tr>
              <Td>
                <strong>Grand Total</strong>
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>
                <strong>${calculateTotalSales()}</strong>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default PharmacistReportTable;
