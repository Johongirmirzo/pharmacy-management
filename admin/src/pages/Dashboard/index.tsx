import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import PharmacySaleChart from "../../components/PharmacySaleChart";
import {
  DashboardSection,
  DashboardHeader,
  DashboardTitle,
  DashboardGridBox,
  DashboardCard,
  DashboardCardTitle,
  DashboardCardText,
} from "./index.styled";
import { ILineChart } from "./index.types";

const Dashboard = () => {
  const pharmacists = useSelector(
    (state: RootState) => state.pharmacists.pharmacists
  );
  const companies = useSelector((state: RootState) => state.company.companies);
  const medicines = useSelector((state: RootState) => state.medicine.medicines);
  const orders = useSelector((state: RootState) => state.order.orders);
  const [chartData, setChartData] = useState({} as ILineChart);
  const [eachOrderSale, setEachOrderSale] = useState<number[]>([]);

  useEffect(() => {
    updateChart();
  }, [orders]);

  const updateChart = (saleFilterVal: string = "today") => {
    const allOrders = orders.map((order) => order.orderItems).flat();

    const sales = allOrders.map((order) => order.total);
    const labels = allOrders.map((order) =>
      moment(order.soldDate).format("yyyy-MM-DD")
    );

    setEachOrderSale(sales);
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

  const calculateOrderTotal = () => {
    return eachOrderSale.reduce((total, currEl) => total + currEl, 0);
  };

  return (
    <DashboardSection>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
      </DashboardHeader>
      <DashboardGridBox>
        <DashboardCard>
          <DashboardCardTitle>
            TOTAL {pharmacists.length > 1 ? "PHARMACISTS" : "PHARMACIST"}
          </DashboardCardTitle>
          <DashboardCardText>{pharmacists.length}</DashboardCardText>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardTitle>
            TOTAL MEDICAL {companies.length > 1 ? "COMPANIES" : "COMPANY"}
          </DashboardCardTitle>
          <DashboardCardText>{companies.length}</DashboardCardText>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardTitle>
            TOTAL {medicines.length > 1 ? "MEDICINES" : "MEDICINE"}
          </DashboardCardTitle>
          <DashboardCardText>{medicines.length}</DashboardCardText>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardTitle>TOTAL SALES</DashboardCardTitle>
          <DashboardCardText>
            {eachOrderSale.length > 0 && `$${calculateOrderTotal()}`}
          </DashboardCardText>
        </DashboardCard>
      </DashboardGridBox>
      {chartData?.datasets && <PharmacySaleChart data={chartData} />}
    </DashboardSection>
  );
};

export default Dashboard;
