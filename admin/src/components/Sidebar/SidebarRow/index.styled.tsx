import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarNavItem = styled.li`
  margin-bottom: 20px;
`;
const SidebarNavTitle = styled.span`
  display: block;
  padding-left: 25px;
  margin-bottom: 20px;
  color: #a5a3a3;
  font-weight: 500;
`;
const SidebarNavLink = styled(NavLink)`
  display: block;
  padding-left: 25px;
  width: 100%;
  color: #333;
  font-weight: 600;
  font-size: 1.05rem;
  border-left: 4px solid transparent;
  transition: color 0.3s ease-out;
  &.active {
    border-left: 4px solid #3f86ff;
    color: #3f86ff;
  }
  &:hover {
    color: #3f86ff;
  }
  & > *:first-child {
    margin-right: 10px;
  }
`;

export { SidebarNavItem, SidebarNavTitle, SidebarNavLink };
