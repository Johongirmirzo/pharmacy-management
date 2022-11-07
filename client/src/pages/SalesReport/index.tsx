import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import SaleReportGenerator from "./SaleReportGenerator";
import SaleReportTable from "./SaleReportTable";
import SaleReportMessage from "./SaleReportMessage";
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
  const { pharmacistId } = useSelector((state: RootState) => state.pharmacist);
  const [saleReportDate, setSaleReportDate] = useState({ from: "", to: "" });
  const [saleReports, setSaleReports] = useState<ISaleReport[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSaleReport = async (reportDate: { from: string; to: string }) => {
    try {
      setIsLoading(true);
      const reportResponse = await getSalesReport(reportDate, pharmacistId);
      setIsLoading(false);
      setSaleReportDate(reportDate);
      setSaleReports(reportResponse.data);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  return (
    <SaleReportsSection>
      <SaleReportsHeader>
        <SaleReportsTitle>Sale Report </SaleReportsTitle>
      </SaleReportsHeader>
      <SaleReportsDateBox>
        <SaleReportGenerator
          isLoading={isLoading}
          fetchSaleReport={fetchSaleReport}
        />
      </SaleReportsDateBox>
      {saleReports.length > 0 ? (
        <SaleReportsResult>
          <SaleReportsHeader>
            <SaleReportMessage
              message="Your sales between"
              saleReportDate={saleReportDate}
            />
          </SaleReportsHeader>
          <SaleReportTable saleReports={saleReports} />
        </SaleReportsResult>
      ) : saleReportDate.from ? (
        <SaleReportsHeader>
          <SaleReportMessage
            message="You've not made any sales between"
            saleReportDate={saleReportDate}
          />
        </SaleReportsHeader>
      ) : (
        ""
      )}
    </SaleReportsSection>
  );
};

export default SaleReports;
