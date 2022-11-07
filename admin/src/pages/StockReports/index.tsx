import React, { useState } from "react";
import StockReportGenerator from "./StockReportGenerator";
import StockReportsTable from "./StockReportTable";
import StockReportMessage from "../../components/StockReportMessage";
import {
  StockReportsSection,
  StockReportsHeader,
  StockReportsTitle,
  StockReportsDateBox,
  StockReportsResult,
} from "./index.styled";
import { getStockReport } from "../../api/report";
import { IMedicine } from "../../redux/medicine";

const StockReports = () => {
  const [stockReports, setStockReports] = useState<IMedicine[]>([]);
  const [stockReportDate, setStockReportDate] = useState({ from: "", to: "" });
  const [isLoading, setIsLoading] = useState(false);

  const fetchStockReport = async (reportDate: { from: string; to: string }) => {
    try {
      setIsLoading(true);
      const reportResponse = await getStockReport(reportDate);
      setStockReportDate({ ...reportDate });
      setIsLoading(false);
      setStockReports(reportResponse.data);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  return (
    <StockReportsSection>
      <StockReportsHeader>
        <StockReportsTitle>Stock Report </StockReportsTitle>
      </StockReportsHeader>
      <StockReportsDateBox>
        <StockReportGenerator
          isLoading={isLoading}
          fetchStockReport={fetchStockReport}
        />
      </StockReportsDateBox>
      {stockReports.length > 0 ? (
        <StockReportsResult>
          <StockReportMessage
            message="Stock reports between"
            stockReportDate={stockReportDate}
          />

          <StockReportsTable stockReports={stockReports} />
        </StockReportsResult>
      ) : stockReportDate.from ? (
        <StockReportMessage
          message="There are no reports for "
          stockReportDate={stockReportDate}
        />
      ) : (
        ""
      )}
    </StockReportsSection>
  );
};

export default StockReports;
