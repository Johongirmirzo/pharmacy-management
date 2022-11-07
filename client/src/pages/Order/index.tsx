import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Pagination from "../../components/Pagination";
import PaginationFilter from "../../components/PaginationFilter";
import OrderTable from "./OrderTable";
import {
  OrdersSection,
  OrdersHeader,
  OrdersTitle,
  OordersSecondaryHeading,
  OrdersPaginationBox,
} from "./index.styled";
import { IOrder } from "../../redux/order";

const Orders = () => {
  const orders = useSelector((state: RootState) => state.order.orders);
  const [paginatedOrders, setPaginatedOrders] = useState<IOrder[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(10);

  useEffect(() => {
    const endOffset = pageOffset + itemsPerPage;
    setPaginatedOrders(orders.slice(pageOffset, endOffset));
    setPageCount(Math.ceil(orders.length / itemsPerPage));
  }, [itemsPerPage, orders, pageOffset]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event, "Event");
    const newOffset = (event.selected * itemsPerPage) % orders.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPageOffset(newOffset);
  };
  const updateItemsPerPage = (itemPerPageAmount: number) =>
    setItemPerPage(itemPerPageAmount);
  return (
    <OrdersSection>
      <OrdersHeader>
        <OrdersTitle>All Orders</OrdersTitle>
      </OrdersHeader>
      {orders.length > 0 ? (
        <>
          <OrderTable orders={paginatedOrders} />
          {orders.length > 10 && (
            <OrdersPaginationBox>
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
              />
              <PaginationFilter
                updateItemsPerPage={updateItemsPerPage}
                itemType="Orders"
              />
            </OrdersPaginationBox>
          )}
        </>
      ) : (
        <OordersSecondaryHeading>
          No orders has been made yet!
        </OordersSecondaryHeading>
      )}
    </OrdersSection>
  );
};

export default Orders;
