import React, { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { removeAdmin } from "../../redux/admin";
import { logout } from "../../api/pharmacist";
import {
  NavbarHeader,
  NavbarLogo,
  NavbarCircleBox,
  NavbarIconBox,
  NavbarTextBox,
  NavbarIcon,
  NavbarList,
  NavbarItem,
  NavbarLink,
  NavbarText,
  NavbarProfileIcon,
  NavbarChangePasswordIcon,
  NavbarLogoutIcon,
} from "./index.styled";
import { removeToken } from "../../utils/localStorage";

const Navbar = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.admin);
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

        dispatch(removeAdmin({}));
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return (
    <NavbarHeader>
      <NavbarLogo to="/dashboard">Cure Pharmacy</NavbarLogo>
      <NavbarCircleBox
        onClick={toggleDropdownMenu}
        className={isDropDownActive ? "dropdown-active" : ""}
      >
        <NavbarIconBox>
          <NavbarIcon />
        </NavbarIconBox>
        <NavbarTextBox>
          <p>Welcome</p>
          <p>{username}</p>
        </NavbarTextBox>
        {isDropDownActive ? <FaChevronUp /> : <FaChevronDown />}
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
      </NavbarCircleBox>
    </NavbarHeader>
  );
};

export default Navbar;
