import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";
import GlobalStyle from "./styles/GlobalStyles";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const MedicineInventory = React.lazy(() => import("./pages/MedicineInventory"));
const MedicineSearch = React.lazy(() => import("./pages/MedicineSearch"));
const InvoiceSearch = React.lazy(() => import("./pages/InvoiceSearch"));
const Invoice = React.lazy(() => import("./pages/Invoice"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Order = React.lazy(() => import("./pages/Order"));
const SaleReport = React.lazy(() => import("./pages/SalesReport"));
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
            <Route path="/medicineInventory" element={<MedicineInventory />} />
            <Route path="/medicineSearch" element={<MedicineSearch />} />
            <Route path="/invoiceSearch" element={<InvoiceSearch />} />
            <Route path="/invoice/:invoiceNumber" element={<Invoice />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/saleReport" element={<SaleReport />} />
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

/**
 *  1. Define the App - DONE
 *  Pharmacy management app is the app that lets pharmacy manage their pharmacists,
 *  medicines, sales and medical companies they business with.
 *
 *
 *  2. Define the features - DONE
 *
 *  Admin
 *    Login
 *      - Admin submits his crdentials to login to the app
 *    Logout
 *      - Logout of the app
 *    Profile
 *      - where admin can change his profile information like name, email, contact number, and username
 *    Change Password
 *      - where admin can change his password to new password
 *    Dashboard
 *      - In dashboard admin  can see
 *        - total pharmacists
 *        - total medical companies they business with
 *        - total medicines they have
 *        - today's sale
 *        - yesterday's sale
 *        - last seven day's sale
 *        - total sales so foar
 *    Invoice Search
 *      - in here admin can search the invoices by their billing number
 *          which presents following info
 *        - "result againts <billing number> keyword" as title
 *        - "Invoice <billing number> as title"
 *        - table of customer information
 *          - customer name
 *          - customer phone number
 *          - mode of payment
 *        - in another table is medicine info
 *          - index of the array
 *          - medicine name
 *          - quantity medicine is being purchased
 *          - price of the current medicine
 *          - total sum of the current medicine
 *          - action to delete current medication from the cart
 *          - grand total sum of all the medicines that are being purchased from
 *        - admin can print and download it as pdf of the current invoice
 *    Medicine Inventory
 *      - in here admin can view table of information about following data
 *        - index of the array
 *        - medical company name
 *        - medicine name
 *        - medicine batch number
 *        - total medicine quantity already sold
 *        - total medicine left in the stock
 *     Add Pharmacy Company
 *        - this is where admin can add pharmacy company
 *    Manage Company
 *        - this is where can view table of pharmacy companies they work width and he can edit/delete any
 *          pharmacy company
 *    Add Medicine
 *        - in here admin can add new medicine by providing following information
 *          - company that medicine is purchased from list of medical companies
 *          - medicine name
 *          - medicine batch no.
 *          - medicine release data
 *          - medicine expiry date
 *          - total medicines in stock
 *          - medicine price
 *    Manage Medicine
 *        - in here admin can see table of all the available medicines and edit and delete any medicine
 *        - following data of the medicine on the table is presented
 *          - no based index of array
 *          - medical company the medicine purchased from
 *          - medicine name
 *          - medicine batch number
 *          - action to delete or edit current medicine
 *    Add Pharmacist
 *        - this is where admin can add new pharmacist by providing below information
 *          - full name of the pharmacist
 *          - mobile number of the pharmacist
 *          - username of the pharmacist
 *          - gender of the pharmacist
 *          - password and confirm password of the pharmacist
 *          - email of the pharmacist
 *    Manage Pharmacist
 *        - this is where admin can view list of pharmacists in the table
 *        - and each table item presents following info
 *          - index of the array pharmacist is in
 *          - pharmacist full name
 *          - pharmacist username
 *          - pharmacist email
 *          - gender of the pharmacist
 *          - action to delete and edit current pharmacist
 *    Stock Reports
 *        - in here admin can view reports between two dates or within from and to dates
 *          which generates reports on medicines and display following information in the table
 *          - index of the array
 *          - medical company
 *          - medicine name
 *          - medicine batch number
 *          - total medicines in stock
 *          - total sold medicines
 *    Pharmacist Sold Report
 *        - in here can admin can choose two date and pharmacist which generates table of information
 *          about the amount of medicines that pharmacist sold which display following information in the table
 *          - index of the array
 *          - medicine batch number
 *          - amount of medicine he sold
 *          - price of each medicine
 *          - total price sum of the medicines he sold
 *    Sales Reports
 *        - in here admin can generate sales reports between two dates
 *          and it displays information in the table as following
 *          - index of the array
 *          - month / year
 *          - medicine name with medicine batch number
 *          - total amount of current medicines sold
 *          - price of each current medicine
 *          - total sum of current medicine sold
 *          - total grand sum of all the medicines sold in the table
 *
 *
 *  Pharmacist
 *    Login
 *      - login to his account to access the app
 *    Logout 
 *      - logout of the app
 *  Profile
 *      - where pharmacist can change his profile information like name, email, contact number, and username
 *    Change Password
 *      - where pharmacist can change his password to new password

 *    Dashboard
 *      - in dashboard pharmacist can view following informaiton
 *        - today's total sale
 *        - yesterday's total sale
 *        - last seven day's total sale
 *        - total sales so far
 *    Inventory
 *        - in here pharmacist can view available medicines and following information
 *          is display in the table
 *          - index of the array
 *          - medical company
 *          - medicine name
 *          - medicine batch number
 *          - total medicine quantity in the shelf
 *          - amount of medicine left in the stock
 *    Search
 *      - in here pharmacist search the medicine by number and it returns
 *        medicine with following info
 *        - index of the array
 *        - medical company
 *        - medicine name
 *        - medicine batch number
 *        - medicine quantity in the shelf
 *        - amount of medicine left in the stock
 *        - buying quantity of the current medicine by client
 *        - action to add this medicine to the cart
 *    Cart
 *      - in here pharcasist can view two inputs
 *        - one input for entering the customer name who is buying medicine
 *        - the other input for entering that customer's mobile number
 *        - mode of payment option whether by cash or card in radio buttons
 *        - table of information about all medicine(s) the customer is buying
 *          - index of the array
 *          - medicine name
 *          - quantity medicine is being purchased
 *          - price of the current medicine
 *          - total sum of the current medicine
 *          - action to delete current medication from the cart
 *          - grand total sum of all the medicines that are being purchased from
 *      Cart Submitting
 *        - once pharmacist enter all the info and submits the cart then billing number with invoice
 *          is generated redirect to invoice page where  presented following information in the table.
 *          - customer name
 *          - customer phone number
 *          - mode of payment
 *        - in another table is medicine info
 *          - index of the array
 *          - medicine name
 *          - quantity medicine is being purchased
 *          - price of the current medicine
 *          - total sum of the current medicine
 *          - action to delete current medication from the cart
 *          - grand total sum of all the medicines that are being purchased from
 *        - ALso billing number presented in UI. and pharmacist can print and download it as pdf of the current invoice
 *    Invoice Search
 *        - in here pharmacist can search the invoices by their billing number
 *          which presents following info
 *        - "result againts <billing number> keyword" as title
 *        - "Invoice <billing number> as title"
 *        - table of customer information
 *          - customer name
 *          - customer phone number
 *          - mode of payment
 *        - in another table is medicine info
 *          - index of the array
 *          - medicine name
 *          - quantity medicine is being purchased
 *          - price of the current medicine
 *          - total sum of the current medicine
 *          - action to delete current medication from the cart
 *          - grand total sum of all the medicines that are being purchased from
 *        - pharmacist can print and download it as pdf of the current invoice
 *    Sales Report
 *      - pharmacist can view sales reports between two dates which display
 *        following information
 *        - "Report from <start-date to end-date>"
 *        - table with following information
 *          - index of the array
 *          - medicine name and it's batch number
 *          - total amont current medication sold
 *          - price of current medication
 *          - total sum sold of the current medication
 *          - grand total sum of all medication sold
 *
 *
 *  3. Define the data structure - DONE
 * 
 * const user = {
 *  username: "",
 *  fullname: "",
 *  email: "",
 *  mobileNumber: 0,
 *  gender: "male",
 *  password: "",
 *  isAdmin: false
 * }
 * const medicalCompany = {
 *  name: ""
 * }
 * const customer = {
 *  customerName: "",
 *  customerMobileNumber: "",
 *  paymentType: "",   
 * }
 * const order = {
 *  customerId: "",
 *  pharmacistId: "",
 *  invoiceNumber: "",
 *  orderItems: [
 *  {medicineId: "", companyName: "", medicineName: "", batcheNumber: "", quantity: "", price: "", total: "", soldDate: ""}
 * ]
 * }
 *  
 * const cart = { 
 *  pharmacistId: "",
 *  orderItems: [
 *  {medicineId: "", companyName: "", medicineName: "", batcheNumber: "", quantity: "", price: "", total: ""}
 * ]
 * }
 * cont medicine = {
 *  medicalCompanyName: "",
 *  medicineName: "",
 *  batchNumber: "",
 *  releaseDate: "",
 *  expireDate: "",
 *  companyId: "",
 *  quantity: 0,
 *  totalInStock: 0,
 *  price: 0,
 * }
 *
 *  API endpoints
 *    admin login
 *    admin logout
 *    admin change profile info
 *    admin change password
 
 * 
 *    pharmacist login
 *    pharmacist logout 
 *    pharmacist change profile info
 *    pharmacist change password
 * 
 *    get all pharmacists
 *    add pharmacist
 *    delete pharmacist
 *    
 * 
 *    get all medical companies
 *    add medical company
 *    update medical company
 *    delete medical company
 *  
 *    get all medicines
 *    add medicine
 *    update medicine 
 *    delete medicine
 * 
 *    
 *    getAllCustomers
 *    editCustomer
 *   
 * 
 *    stock reports
 *    
 *    pharmacist sales reports
 *    sale reports
 *    medicine inventory
 *    invoice search 
 * 
 *    add to cart
 *    order items
 * 
 *    
 *
 *  5. Build API
 *    1. create the folder structure - DONE
 *    
 *    2. install all the pacakges - DONE
 * 
 *    3. set up server - DONE
 * 
 *    4. create routes - DONE
 *      1. User - DONE
 *        1. user login
 *        2. user create account
 *        3. user logout
 *      2. Medical Company - DONE
 *      3. Medicine - DONE
 *      4. Cart - DONE
 *      5. Order - DONE
 *      
 *
 *  6. Build Admin - DONE
 *
 *
 *  7. Build Client
 *    
 *
 *
 *  8. Host API
 *
 *
 *  9. Host Admin
 *
 *
 *  10. Host Client
 *
 *
 *
 *
 */
