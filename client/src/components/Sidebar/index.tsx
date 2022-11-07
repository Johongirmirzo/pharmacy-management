import React, { useState, useEffect } from "react";
import SidebarLogo from "./SideberLogo";
import SidebarRow from "./SidebarRow";
import SidebarHamburger from "./SidebarHamburger";
import {
  SidebarAside,
  SidebarNav,
  SidebarNavList,
  SidebarOverlay,
} from "./index.styled";
import sidebarRowsData from "./sideberRowsData";
import { useMobile } from "../../hooks/useMobile";
import { SCREEN_SIZES } from "../../config/screenSizes";

const Sidebar = () => {
  const isMobile = useMobile();
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  useEffect(() => {
    document.body.classList.remove("active");
    if (isSidebarToggled) {
      document.body.classList.add("active");
    }
  }, [isSidebarToggled]);

  useEffect(() => {
    const removeSidebarOnLargeScreens = () => {
      if (window.innerWidth > SCREEN_SIZES.MOBILE) {
        setIsSidebarToggled(false);
      }
    };
    window.addEventListener("resize", removeSidebarOnLargeScreens);
    return () =>
      window.removeEventListener("resize", removeSidebarOnLargeScreens);
  }, [isSidebarToggled]);

  const toggleSidebar = () => setIsSidebarToggled(!isSidebarToggled);

  console.log(SCREEN_SIZES);
  return (
    <SidebarAside isMobile={isMobile} isSidebarToggled={isSidebarToggled}>
      {isSidebarToggled && <SidebarOverlay />}
      {isMobile && (
        <SidebarHamburger
          isMobile={isMobile}
          isSidebarToggled={isSidebarToggled}
          toggleSidebar={toggleSidebar}
        />
      )}
      <SidebarLogo />
      <SidebarNav>
        <SidebarNavList>
          {isMobile
            ? sidebarRowsData.map((sidebarRow) => (
                <SidebarRow
                  key={sidebarRow.id}
                  sidebarRow={sidebarRow}
                  toggleSidebar={toggleSidebar}
                />
              ))
            : sidebarRowsData.map((sidebarRow) => (
                <SidebarRow key={sidebarRow.id} sidebarRow={sidebarRow} />
              ))}
        </SidebarNavList>
      </SidebarNav>
    </SidebarAside>
  );
};

export default Sidebar;
