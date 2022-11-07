import { MdOutlineSpaceDashboard, MdOutlineInventory2, MdAddShoppingCart, MdOutlineAttachMoney } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { FcSalesPerformance } from "react-icons/fc";

const sidebarRowsData = [
    {id: "1", title: "", route: "/dashboard", linkText: "Dashboard", icon: MdOutlineSpaceDashboard, iconColor: "blue"},
    {id: "2", title: "", route: "/invoiceSearch", linkText: "Invoice Search", icon: ImSearch, iconColor: "red"},
    {id: "3", title: "", route: "/medicineInventory", linkText: "Medicine Inventory", icon: MdOutlineInventory2, iconColor: "blue"},
    {id: "5", title: "", route: "/medicineSearch", linkText: "Medicine Search", icon: ImSearch, iconColor: "red"},
    {id: "4", title: "CART", route: "/cart", linkText: "Cart", icon: MdAddShoppingCart, iconColor: "red"},
    {id: "10", title: "ORDERS", route: "/orders", linkText: "Orders", icon: MdOutlineAttachMoney, iconColor: "blue"},
    {id: "6", title: "REPORT", route: "/saleReport", linkText: "Sales Report", icon: FcSalesPerformance, iconColor: "red"},
]
export default sidebarRowsData