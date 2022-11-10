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

const DashboardGridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 50px;

  @media (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    & > *:last-child {
      grid-column: 1/4;
    }
  }
`;

const DashboardCard = styled.div`
  flex: 1;
  padding: 20px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;

  & span {
    display: block;
  }
`;
const DashboardCardTitle = styled.span`
  color: #555;
  font-weight: 500;
`;
const DashboardCardText = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export {
  DashboardSection,
  DashboardHeader,
  DashboardTitle,
  DashboardGridBox,
  DashboardCard,
  DashboardCardTitle,
  DashboardCardText,
};
