import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import OrderTable from "./OrderTable";
import {
  OrdersSection,
  OrdersHeader,
  OrdersTitle,
  OordersSecondaryHeading,
} from "./index.styled";

const Orders = () => {
  const orders = useSelector((state: RootState) => state.order.orders);
  console.log("Orders", orders);
  return (
    <OrdersSection>
      <OrdersHeader>
        <OrdersTitle>All Orders</OrdersTitle>
      </OrdersHeader>
      {orders.length > 0 ? (
        <OrderTable orders={orders} />
      ) : (
        <OordersSecondaryHeading>
          No orders has been made yet!
        </OordersSecondaryHeading>
      )}
    </OrdersSection>
  );
};

export default Orders;
