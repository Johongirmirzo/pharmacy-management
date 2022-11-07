import styled, { css } from "styled-components";

interface SidebarAsideProps {
  isMobile: boolean;
  isSidebarToggled: boolean;
}

const SidebarAside = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  padding: 20px 0;
  min-width: 80px;
  max-width: 80px;
  background: #fff;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-out;
  z-index: 9999;
  @media (min-width: 750px) {
    position: sticky;
    min-width: 300px;
    max-width: 300px;
  }
  ${(props: SidebarAsideProps) =>
    props.isMobile &&
    css`
      & > *:not(:first-child) {
        visibility: hidden;
      }
    `}
  ${(props: SidebarAsideProps) =>
    props.isSidebarToggled &&
    css`
      position: fixed;
      min-width: 300px;
      max-width: 300px;
      z-index: 99;
      & > *:not(:first-child) {
        visibility: visible;
      }
    `}
`;
const SidebarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 300px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

const SidebarNav = styled.nav``;
const SidebarNavList = styled.ul`
  list-style: none;
  & li:nth-child(4),
  li:nth-child(5),
  li:nth-child(6) {
    border-bottom: 1px solid #dadada;
    padding-bottom: 30px;
  }
`;
export { SidebarAside, SidebarNav, SidebarNavList, SidebarOverlay };
