import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, storePersistor } from "./redux/store";
import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
/**
 *  1. Create the folder structure
 *
 *  2. Install the packages
 *
 *  3. Components
 *      App
 *        Home
 *          Dashboard
 *             DashboardChart
 *          Medicine Inventory
 *            InventoryTable
 *              InventoryTableRow
 *          Medicine Search
 *            MedicineSearchForm
 *            MedicineSearchItem
 *          Cart
 *            CustomerInfoForm
 *            CartTable
 *              CartTableRow
 *          Invoice
 *          Invoice Search
 *          SalesReport
 *            SaleReportGenerator
 *            SaleReportTable
 *              SaleReportTableRow
 *        Login
 *          LoginForm
 *
 */
