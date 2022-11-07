import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormSelect,
} from "../../../styles/UI/Form/index.styled";

const ChartFilter = () => {
  return (
    <FormControl>
      <FormLabel htmlFor="sales">Pharmacy Sales</FormLabel>
      <FormSelect id="sales">
        <option value="today">Today</option>
        <option value="1">Yesterday</option>
        <option value="3">Last 3 Days</option>
        <option value="7">Lasy 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="90">Last 3 Months</option>
        <option value="180">Last 6 Months</option>
        <option value="365">Last 1 Year</option>
        <option value="1095">Last 3 Years</option>
        <option value="1825">Last 5 Years</option>
      </FormSelect>
    </FormControl>
  );
};

export default ChartFilter;
