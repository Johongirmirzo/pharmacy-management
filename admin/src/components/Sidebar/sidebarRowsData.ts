import { MdOutlineSpaceDashboard, MdOutlineInventory2, MdOutlineManageAccounts, MdOutlineLocalPharmacy, MdOutlineAttachMoney } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { GiMedicines } from "react-icons/gi";
import { BsPersonPlusFill } from "react-icons/bs";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import { AiOutlineLineChart } from "react-icons/ai";

const sidebarRowsData = [
    {id: "1", title: "", route: "/dashboard", linkText: "Dashboard", icon: MdOutlineSpaceDashboard, iconColor: "blue"},
    {id: "2", title: "", route: "/invoiceSearch", linkText: "Invoice Search", icon: ImSearch, iconColor: "red"},
    {id: "3", title: "", route: "/medicineInventory", linkText: "Medicine Inventory", icon: MdOutlineInventory2, iconColor: "blue"},
    {id: "21", title: "ORDERS", route: "/orders", linkText: "Orders", icon: MdOutlineAttachMoney, iconColor: "red"},
    {id: "4", title: "PHARMACY COMPANY", route: "/addCompany", linkText: "Add Company", icon: HiOutlineBuildingOffice, iconColor: "red"},
    {id: "5", title: "", route: "/manageCompany", linkText: "Manage Company", icon: MdOutlineManageAccounts, iconColor: "blue"},
    {id: "6", title: "MEDICINE", route: "/addMedicine", linkText: "Add Medicine", icon: GiMedicines, iconColor: "red"},
    {id: "7", title: "", route: "/manageMedicine", linkText: "Manage Medicine", icon: MdOutlineManageAccounts, iconColor: "blue"},
    {id: "8", title: "PHARMACIST", route: "/addPharmacist", linkText: "Add Pharmacist", icon: BsPersonPlusFill, iconColor: "red"},
    {id: "9", title: "", route: "/managePharmacist", linkText: "Manage Pharmacist", icon: MdOutlineManageAccounts, iconColor: "blue"},
    {id: "10", title: "REPORTS", route: "/stockReport", linkText: "Stock Report", icon: TbBuildingWarehouse, iconColor: "red"},
    {id: "11", title: "", route: "/pharmacistSaleReport", linkText: "Pharmacist Sales Report", icon: AiOutlineLineChart, iconColor: "blue"},
    {id: "12", title: "", route: "/salesReport", linkText: "Sales Report", icon: FcSalesPerformance, iconColor: "red"},
]
export default sidebarRowsData