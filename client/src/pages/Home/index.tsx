import React, { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { storeAllOrders } from "../../redux/order";
import { storeAllMedicines } from "../../redux/medicine";
import { storeAllCartItems } from "../../redux/cart";
import { getAllPharmacistOrders } from "../../api/order/order";
import { getCustomer } from "../../api/customer";
import { getAllMedicines } from "../../api/medicine";
import { getAllCartItems } from "../../api/cart";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { HomeContainer, HomeMainArea, HomeMainAreaBox } from "./index.styled";
import { IOrder } from "../../redux/order";

const Home = () => {
  const { username, pharmacistId } = useSelector(
    (state: RootState) => state.pharmacist
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, [username]);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location]);

  useEffect(() => {
    fetchAllPharmacistOrders();
    fetchAllMedicines();
    fetchAllCartItems();
  }, []);

  const fetchAllPharmacistOrders = async () => {
    try {
      const orderResponse = await getAllPharmacistOrders(pharmacistId);
      console.log(orderResponse);
      const getEachCustomerById = orderResponse.data.map((order: IOrder) =>
        getCustomer(order.customerId)
      );
      const customers = await Promise.all(getEachCustomerById);

      const orders = orderResponse.data.map((order: IOrder, index: number) => {
        const customerName = customers[index].data.name;
        const customerMobileNumber = customers[index].data.mobileNumber;
        const customerPayMode = customers[index].data.paymentType;
        return {
          ...order,
          customerName,
          customerMobileNumber,
          customerPayMode,
        };
      });

      dispatch(storeAllOrders({ orders }));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAllMedicines = async () => {
    try {
      const medicineResponse = await getAllMedicines();
      dispatch(storeAllMedicines({ medicines: medicineResponse.data }));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllCartItems = async () => {
    try {
      const cartItemResponse = await getAllCartItems(pharmacistId);
      console.log(cartItemResponse, "cart item");
      if (cartItemResponse.data) {
        dispatch(
          storeAllCartItems({ cartItems: cartItemResponse.data.orderItems })
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <HomeContainer>
      <Sidebar />
      <HomeMainArea>
        <Navbar />
        <HomeMainAreaBox>
          <Outlet />
        </HomeMainAreaBox>
      </HomeMainArea>
    </HomeContainer>
  );
};

export default Home;
