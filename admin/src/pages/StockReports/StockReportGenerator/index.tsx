import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";
import { StockReportGeneratorProps } from "./index.types";

const StockReportGenerator = ({
  fetchStockReport,
  isLoading,
}: StockReportGeneratorProps) => {
  const [reportDate, setReportDate] = useState({ from: "", to: "" });
  const [errors, setErrors] = useState<string[]>([]);

  const handleGetStockReportClick = () => {
    if (!reportDate.from.length && !reportDate.to.length) {
      setErrors(["From Date can't be empty!", "To Date can't be empty!"]);
    } else if (!reportDate.from.length) {
      setErrors(["From Date can't be empty!"]);
    } else if (!reportDate.to.length) {
      setErrors([...errors, "To Date can't be empty!"]);
    } else {
      fetchStockReport(reportDate);
    }
  };

  const handleStockReportDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputName = e.target.name;
    setReportDate({ ...reportDate, [inputName]: e.target.value });
    if (inputName === "from" && errors[0]) {
      setErrors([""]);
    } else if (inputName === "to" && errors[1]) {
      setErrors([""]);
    }
  };
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="from">From</FormLabel>
        <FormInput
          onChange={handleStockReportDateChange}
          value={reportDate.from}
          type="date"
          id="from"
          name="from"
        />
        {errors[0] && <FormFieldError>{errors[0]}</FormFieldError>}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="to">To</FormLabel>
        <FormInput
          onChange={handleStockReportDateChange}
          value={reportDate.to}
          type="date"
          id="to"
          name="to"
        />
        {errors[1] && <FormFieldError>{errors[1]}</FormFieldError>}
      </FormControl>
      <FormButton
        isLoading={isLoading ? true : false}
        disabled={isLoading ? true : false}
        onClick={handleGetStockReportClick}
      >
        {isLoading ? "Generating Report..." : "Generate Report"}
      </FormButton>
    </>
  );
};

export default StockReportGenerator;
