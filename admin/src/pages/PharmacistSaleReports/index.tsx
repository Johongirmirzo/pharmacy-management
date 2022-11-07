import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ReportMessage from "../../components/StockReportMessage";
import PharmacySaleGenerator from "./PharmacySaleGenerator";
import PharmacistReportTable from "./PharmacistReportTable";
import {
  PharmacistSaleSection,
  PharmacistSaleHeader,
  PharmacistSaleTitle,
  PharmacistInputsBox,
  PharmacistSaleResultBox,
} from "./index.styled";
import { getPharmacistSalesReport } from "../../api/report";
import { ISaleReport } from "./index.types";

const PharmacistSaleReports = () => {
  const pharmacists = useSelector(
    (state: RootState) => state.pharmacists.pharmacists
  );
  const [pharmacySaleDate, setPharmacySaleDate] = useState({
    from: "",
    to: "",
  });
  const [salesByPharmacist, setSalesByPharmacist] = useState<ISaleReport[]>([]);
  const [pharmacistName, setPharmacistName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPharmacistSaleReport = async (reportData: {
    from: string;
    to: string;
    pharmacistId: string;
  }) => {
    try {
      setIsLoading(true);
      const pharmacistSaleResponse = await getPharmacistSalesReport(reportData);
      console.log(reportData);
      console.log("Sale response data", pharmacistSaleResponse);
      setSalesByPharmacist(pharmacistSaleResponse.data);
      setPharmacistName(
        pharmacists.filter(
          (pharmacist) => pharmacist._id === reportData.pharmacistId
        )[0].fullname
      );
      setPharmacySaleDate(reportData);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };
  return (
    <PharmacistSaleSection>
      <PharmacistSaleHeader>
        <PharmacistSaleTitle>Pharmacist Sale Report</PharmacistSaleTitle>
      </PharmacistSaleHeader>
      <PharmacistInputsBox>
        <PharmacySaleGenerator
          fetchPharmacistSaleReport={fetchPharmacistSaleReport}
          isLoading={isLoading}
          pharmacists={pharmacists}
        />
      </PharmacistInputsBox>
      {salesByPharmacist.length > 0 ? (
        <PharmacistSaleResultBox>
          <ReportMessage
            message="Sales for dates"
            stockReportDate={pharmacySaleDate}
            pharmacist={pharmacistName}
          />
          <PharmacistReportTable
            salesByPharmacist={salesByPharmacist}
            pharmacistName={pharmacistName}
          />
        </PharmacistSaleResultBox>
      ) : pharmacistName ? (
        <ReportMessage
          message={`Pharmacist ${pharmacistName} has not made any sales for dates`}
          stockReportDate={pharmacySaleDate}
        />
      ) : (
        ""
      )}
    </PharmacistSaleSection>
  );
};

export default PharmacistSaleReports;
