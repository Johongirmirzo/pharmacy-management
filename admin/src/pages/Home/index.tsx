import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { storeAllPharmacists } from "../../redux/pharmacist";
import { storeAllCompanies } from "../../redux/company";
import { storeAllMedicines } from "../../redux/medicine";
import { storeAllOrders, IOrder } from "../../redux/orders";
import { getAllPharmacists } from "../../api/pharmacist";
import { getAllCompanies } from "../../api/company";
import { getAllMedicines } from "../../api/medicine";
import { getAllOrders } from "../../api/orders";
import { getCustomer } from "../../api/customer";
import Sidebar from "../../components/Sidebar/index";
import Navbar from "../../components/Navbar/index";
import Loader from "../../components/Loader/index";
import { HomeContainer, HomeMainArea, HomeMainAreaBox } from "./index.styled";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = useSelector((state: RootState) => state.admin);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location?.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location]);

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);

  useEffect(() => {
    setIsLoading(true);
    fetchAllPharmacists();
    fetchAllCompanies();
    fetchAllMedicines();
    fetchAllOrders();
    setIsLoading(false);
  }, []);

  const fetchAllPharmacists = async () => {
    try {
      const pharmacistResponse = await getAllPharmacists();
      dispatch(storeAllPharmacists({ pharmacists: pharmacistResponse.data }));
    } catch (err) {
      console.error(err);
    }
  };
  const fetchAllCompanies = async () => {
    try {
      const companyResponse = await getAllCompanies();
      dispatch(storeAllCompanies({ companies: companyResponse.data }));
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
  const fetchAllOrders = async () => {
    try {
      const orderResponse = await getAllOrders();
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
