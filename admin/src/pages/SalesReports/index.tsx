import React, { useState } from "react";
import StockReportMessage from "../../components/StockReportMessage";
import SaleReportGenerator from "./SaleReportGenerator";
import SaleReportTable from "./SalesReportTable";
import {
  SaleReportsSection,
  SaleReportsHeader,
  SaleReportsTitle,
  SaleReportsDateBox,
  SaleReportsResult,
} from "./index.styled";
import { getSalesReport } from "../../api/report";
import { ISaleReport } from "./index.types";

const SaleReports = () => {
  const [saleReportDate, setSaleReportDate] = useState({ from: "", to: "" });
  const [saleReports, setSaleReports] = useState<ISaleReport[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSaleReport = async (reportDate: { from: string; to: string }) => {
    try {
      setIsLoading(true);
      const reportResponse = await getSalesReport(reportDate);
      setIsLoading(false);
      setSaleReportDate(reportDate);
      setSaleReports(reportResponse.data);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  console.log(saleReports);
  return (
    <SaleReportsSection>
      <SaleReportsHeader>
        <SaleReportsTitle>Sale Report </SaleReportsTitle>
      </SaleReportsHeader>
      <SaleReportsDateBox>
        <SaleReportGenerator
          fetchSaleReport={fetchSaleReport}
          isLoading={isLoading}
        />
      </SaleReportsDateBox>
      {saleReports.length > 0 ? (
        <SaleReportsResult>
          <StockReportMessage
            stockReportDate={saleReportDate}
            message="Sales between"
          />
          <SaleReportTable saleReports={saleReports} />
        </SaleReportsResult>
      ) : saleReportDate.from ? (
        <StockReportMessage
          stockReportDate={saleReportDate}
          message="There are no sales between"
        />
      ) : (
        ""
      )}
    </SaleReportsSection>
  );
};

export default SaleReports;
