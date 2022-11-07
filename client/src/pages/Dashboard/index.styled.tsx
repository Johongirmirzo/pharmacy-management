import styled from "styled-components";

const DashboardSection = styled.section`
  margin: 30px 0;
`;
const DashboardHeader = styled.header`
  margin-bottom: 50px;
`;
const DashboardTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const DashboardSecondaryTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;

export {
  DashboardSection,
  DashboardHeader,
  DashboardTitle,
  DashboardSecondaryTitle,
};
