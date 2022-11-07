import React from "react";
import {
  SidebarNavItem,
  SidebarNavLink,
  SidebarNavTitle,
} from "./index.styled";
import { SidebarRowProps } from "./index.types";

const SidebarRow = ({
  sidebarRow: { title, route, linkText, icon: Icon, iconColor },
  toggleSidebar,
}: SidebarRowProps) => {
  return (
    <SidebarNavItem onClick={toggleSidebar}>
      {title && <SidebarNavTitle>{title}</SidebarNavTitle>}
      <SidebarNavLink to={route}>
        <Icon style={{ color: iconColor }} /> {linkText}
      </SidebarNavLink>
    </SidebarNavItem>
  );
};

export default SidebarRow;
