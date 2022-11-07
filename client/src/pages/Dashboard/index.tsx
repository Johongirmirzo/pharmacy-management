import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import PharmacySaleChart from "../../components/PharmacySaleChart";
import {
  DashboardSection,
  DashboardHeader,
  DashboardTitle,
  DashboardSecondaryTitle,
} from "./index.styled";
import { ILineChart } from "./index.types";

const Dashboard = () => {
  const orders = useSelector((state: RootState) => state.order.orders);
  const [sales, setSales] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [saleFilterVal, setSalesFilterVal] = useState("today");
  const [chartData, setChartData] = useState({} as ILineChart);

  useEffect(() => {
    updateChart(saleFilterVal);
  }, [orders]);

  const updateChart = (saleFilterVal: string = "today") => {
    const allOrders = orders.map((order) => order.orderItems).flat();
    const sales = allOrders.map((order) => {
      console.log(order, "order");
      return order.total;
    });
    const labels = allOrders.map((order) =>
      moment(order.soldDate).format("yyyy-MM-DD")
    );

    console.log(sales, labels);
    setChartData({
      labels,
      datasets: [
        {
          label: `Sale`,
          data: sales,
          backgroundColor: "#391c825e",
          fill: true,
          borderColor: ["red"],
          borderWidth: 2,
          color: "#fff",
        },
      ],
    });
  };

  console.log("All orders", orders);
  return (
    <DashboardSection>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
      </DashboardHeader>
      {orders.length > 0 ? (
        chartData?.datasets && <PharmacySaleChart data={chartData} />
      ) : (
        <DashboardSecondaryTitle>
          There are no sales yet!
        </DashboardSecondaryTitle>
      )}
    </DashboardSection>
  );
};

export default Dashboard;
