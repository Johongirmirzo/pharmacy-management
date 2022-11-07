import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartFilter from "./ChartFilter";
import {
  PharmacySaleChartSection,
  PharmacySaleChartHeader,
  PharmacySaleChartTitle,
} from "./index.styled";
import { PharmacySaleChartProps } from "./index.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const PharmacySaleChart = ({ data }: PharmacySaleChartProps) => {
  return (
    <PharmacySaleChartSection>
      <PharmacySaleChartHeader>
        <PharmacySaleChartTitle>Pharmacy Sale Chart</PharmacySaleChartTitle>
      </PharmacySaleChartHeader>
      <Line data={data} />
    </PharmacySaleChartSection>
  );
};

export default PharmacySaleChart;
