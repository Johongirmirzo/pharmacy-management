import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removePharmacist } from "../../redux/pharmacist";
import { logout } from "../../api/pharmacist";
import {
  NavbarHeader,
  NavbarLogo,
  NavbarCircle,
  NavbarIcon,
  NavbarList,
  NavbarItem,
  NavbarLink,
  NavbarText,
  NavbarProfileIcon,
  NavbarChangePasswordIcon,
  NavbarLogoutIcon,
} from "./index.styled";
import { removeToken } from "../../util/localStorage";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  useEffect(() => {
    const body = document.body;
    const closeDropDownMenu = () => {
      console.log("Body clicked");
      if (isDropDownActive) {
        setIsDropDownActive(false);
      }
    };
    if (isDropDownActive) {
      body.addEventListener("click", closeDropDownMenu);
    }
    return () => {
      body.removeEventListener("click", closeDropDownMenu);
    };
  }, [isDropDownActive]);

  const toggleDropdownMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDropDownActive(!isDropDownActive);
  };

  const handleLogoutClick = () => {
    (async () => {
      try {
        await logout();
        removeToken();
        dispatch(removePharmacist({}));
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return (
    <NavbarHeader>
      <NavbarLogo to="/dashboard">
        Pharmacy Management <br />
        System
      </NavbarLogo>
      <NavbarCircle
        onClick={toggleDropdownMenu}
        className={isDropDownActive ? "dropdown-active" : ""}
      >
        <NavbarIcon />
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/changeProfile">
              <NavbarProfileIcon />
              My Profile
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/changePassword">
              <NavbarChangePasswordIcon />
              Change Password
            </NavbarLink>
          </NavbarItem>
          <NavbarItem onClick={handleLogoutClick}>
            <NavbarText>
              <NavbarLogoutIcon />
              Logout
            </NavbarText>
          </NavbarItem>
        </NavbarList>
      </NavbarCircle>
    </NavbarHeader>
  );
};

export default Navbar;
