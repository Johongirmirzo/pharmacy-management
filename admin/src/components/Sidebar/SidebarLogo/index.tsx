import React from "react";
import Logo from "../../../assets/pharmacy-icon.webp";
import {
  SidebarLogoBox,
  SidebarLogoIcon,
  SidebarLogoTitle,
} from "./index.styled";

const SidebarLogo = () => {
  return (
    <SidebarLogoBox to="/dashboard">
      {/* <SidebarLogoIcon /> */}
      <img src={Logo} height="50" alt="web app logo" />
      <SidebarLogoTitle>
        Cure
        <br />
        Pharmacy
      </SidebarLogoTitle>
    </SidebarLogoBox>
  );
};

export default SidebarLogo;
