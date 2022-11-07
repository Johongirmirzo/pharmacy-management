import React from "react";
import { StockReportHeader, StockReportMessageTitle } from "./index.styled";
import { StockReportMessageProps } from "./index.types";

const StockReportMessage = ({
  stockReportDate,
  message,
  pharmacist,
}: StockReportMessageProps) => {
  return (
    <StockReportHeader>
      <StockReportMessageTitle>
        {message} {stockReportDate.from} and {stockReportDate.to}
        {pharmacist && ` by ${pharmacist}`}
      </StockReportMessageTitle>
    </StockReportHeader>
  );
};

export default StockReportMessage;
