import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";
import GlobalStyle from "./styles/GlobalStyle";

const Login = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const InvoiceSearch = React.lazy(() => import("./pages/InvoiceSearch"));
const MedicineInventory = React.lazy(() => import("./pages/MedicineInventory"));
const Orders = React.lazy(() => import("./pages/Orders"));
const AddCompany = React.lazy(() => import("./pages/AddCompany"));
const EditCompany = React.lazy(() => import("./pages/EditCompany"));
const ManageCompany = React.lazy(() => import("./pages/ManageCompany"));
const AddMedicine = React.lazy(() => import("./pages/AddMedicine"));
const EditMedicine = React.lazy(() => import("./pages/EditMedicine"));
const ManageMedicine = React.lazy(() => import("./pages/ManageMedicine"));
const AddPharmacist = React.lazy(() => import("./pages/AddPharmacist"));
const EditPharmacist = React.lazy(() => import("./pages/EditPharmacist"));
const ManagePharmacist = React.lazy(() => import("./pages/ManagePharmacist"));
const StockReport = React.lazy(() => import("./pages/StockReports"));
const PharmacistSaleReport = React.lazy(
  () => import("./pages/PharmacistSaleReports")
);
const SalesReport = React.lazy(() => import("./pages/SalesReports"));
const ChangeProfile = React.lazy(() => import("./pages/ChangeProfile"));
const ChangePassword = React.lazy(() => import("./pages/ChangePassword"));

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/invoiceSearch" element={<InvoiceSearch />} />
            <Route path="/medicineInventory" element={<MedicineInventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/addCompany" element={<AddCompany />} />
            <Route path="/editCompany/:companyId" element={<EditCompany />} />
            <Route path="/manageCompany" element={<ManageCompany />} />
            <Route path="/addMedicine" element={<AddMedicine />} />
            <Route
              path="/editMedicine/:medicineId"
              element={<EditMedicine />}
            />
            <Route path="/manageMedicine" element={<ManageMedicine />} />
            <Route path="/addPharmacist" element={<AddPharmacist />} />
            <Route
              path="/editPharmacist/:pharmacistId"
              element={<EditPharmacist />}
            />
            <Route path="/managePharmacist" element={<ManagePharmacist />} />
            <Route path="/stockReport" element={<StockReport />} />
            <Route
              path="/pharmacistSaleReport"
              element={<PharmacistSaleReport />}
            />
            <Route path="/salesReport" element={<SalesReport />} />
            <Route path="/changeProfile" element={<ChangeProfile />} />
            <Route path="/changePassword" element={<ChangePassword />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
