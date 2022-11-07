import styled from "styled-components";

const PharmacistSection = styled.section`
  margin: 30px 0;
`;
const PharmacistHeader = styled.header`
  margin-bottom: 30px;
`;
const PharmacistTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const PharmacistBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { PharmacistSection, PharmacistHeader, PharmacistTitle, PharmacistBox };
