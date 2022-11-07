import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
  FormSelect,
} from "../../../styles/UI/Form/index.styled";
import { PharmacySaleGeneratorProps } from "./index.types";

const PharmacySaleGenerator = ({
  isLoading,
  pharmacists,
  fetchPharmacistSaleReport,
}: PharmacySaleGeneratorProps) => {
  const [reportData, setReport] = useState({
    from: "",
    to: "",
    pharmacistId: "",
  });
  const [errors, setErrors] = useState({ 0: "", 1: "", 2: "" });

  const handleGenerateReportClick = () => {
    if (
      !reportData.from.length &&
      !reportData.to.length &&
      !reportData.pharmacistId.length
    ) {
      setErrors({
        0: "From date can't be empty!",
        1: "To date can't be empty!",
        2: "Pharamcist must be chosen!",
      });
    } else if (!reportData.from.length) {
      setErrors({ ...errors, 0: "From date can't be empty!" });
    } else if (!reportData.to.length) {
      setErrors({ ...errors, 1: "To date can't be empty!" });
    } else if (!reportData.pharmacistId.length) {
      return setErrors({ ...errors, 2: "Pharmacist must be chosen!" });
    } else {
      fetchPharmacistSaleReport(reportData);
    }
  };
  const handleUpdateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.name === "soldBy");
    setReport({ ...reportData, [e.target.name]: e.target.value });
    if (e.target.name === "from" && errors[0]) {
      setErrors({ ...errors, 0: "" });
    } else if (e.target.name === "to" && errors[1]) {
      setErrors({ ...errors, 1: "" });
    } else if (e.target.name === "pharmacistId" && errors[2]) {
      setErrors({ ...errors, 2: "" });
    }
  };

  return (
    <>
      <FormControl>
        <FormLabel htmlFor="from">From</FormLabel>
        <FormInput
          onChange={handleUpdateInputChange}
          value={reportData.from}
          type="date"
          id="from"
          name="from"
        />
        {errors[0] && <FormFieldError>{errors[0]}</FormFieldError>}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="to">To</FormLabel>
        <FormInput
          onChange={handleUpdateInputChange}
          value={reportData.to}
          type="date"
          id="to"
          name="to"
        />
        {errors[1] && <FormFieldError>{errors[1]}</FormFieldError>}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="from">Sold by Pharmacist</FormLabel>
        <FormSelect
          onChange={handleUpdateInputChange}
          id="from"
          name="pharmacistId"
        >
          <option value="">All</option>
          {pharmacists.map((pharmacist) => (
            <option key={pharmacist._id} value={pharmacist._id}>
              {pharmacist.fullname}
            </option>
          ))}
        </FormSelect>
        {errors[2] && <FormFieldError>{errors[2]}</FormFieldError>}
      </FormControl>

      <FormButton
        onClick={handleGenerateReportClick}
        isLoading={isLoading ? true : false}
        disabled={isLoading ? true : false}
      >
        {isLoading ? "Generating Sale Report..." : "Genereat Report"}
      </FormButton>
    </>
  );
};

export default PharmacySaleGenerator;
