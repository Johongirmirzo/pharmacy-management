import styled from "styled-components";

const PharmacistSaleSection = styled.section`
  margin: 30px 0;
`;
const PharmacistSaleHeader = styled.header`
  margin-bottom: 30px;
`;
const PharmacistSaleTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const PharmacistInputsBox = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;
const PharmacistInputsHeader = styled.header``;
const PharmacistInputsTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;
const PharmacistSaleResultBox = styled.div``;
const PharmacistNotSaleTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;

export {
  PharmacistSaleSection,
  PharmacistSaleHeader,
  PharmacistSaleTitle,
  PharmacistInputsBox,
  PharmacistInputsHeader,
  PharmacistInputsTitle,
  PharmacistSaleResultBox,
  PharmacistNotSaleTitle,
};
