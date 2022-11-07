import React from "react";
import { SaleReportMessageTitle } from "./index.styled";
import { SaleReportMessageProps } from "./index.types";

const SaleReportMessage = ({
  saleReportDate,
  message,
}: SaleReportMessageProps) => {
  return (
    <SaleReportMessageTitle>
      {message} {saleReportDate.from} and {saleReportDate.to}
    </SaleReportMessageTitle>
  );
};

export default SaleReportMessage;
