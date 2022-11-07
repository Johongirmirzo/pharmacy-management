import styled from "styled-components";

const OrdersSection = styled.section`
  margin: 30px 0;
`;
const OrdersHeader = styled.header`
  margin-bottom: 30px;
`;
const OrdersTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const OrdersPaginationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { OrdersSection, OrdersHeader, OrdersTitle, OrdersPaginationBox };
