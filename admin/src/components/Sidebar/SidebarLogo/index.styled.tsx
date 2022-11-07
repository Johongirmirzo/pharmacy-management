import styled from "styled-components";
import { BsFillPlusSquareFill } from "react-icons/bs";

const SidebarLogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
  padding-left: 25px;
  color: #f92525;
`;
const SidebarLogoIcon = styled(BsFillPlusSquareFill)`
  font-size: 20px;
`;
const SidebarLogoTitle = styled.h2``;

export { SidebarLogoBox, SidebarLogoIcon, SidebarLogoTitle };
