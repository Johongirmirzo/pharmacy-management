import React from "react";
import OrdersTable from "./OrdersTable";
import { OrdersSection, OrdersHeader, OrdersTitle } from "./index.styled";

const Orders = () => {
  return (
    <OrdersSection>
      <OrdersHeader>
        <OrdersTitle>All Orders</OrdersTitle>
      </OrdersHeader>
      <OrdersTable />
    </OrdersSection>
  );
};

export default Orders;
