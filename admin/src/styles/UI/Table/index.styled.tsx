import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  & th,
  td {
    border-bottom: 1px solid #999;
    padding: 20px;
  }
  & tr:last-child td {
    border: 0;
  }
  & tr:nth-child(odd) td {
    background: #d7eeff40;
  }
`;
const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th`
  text-align: left;
`;
const Td = styled.td``;

export { Table, Thead, Tbody, Tr, Th, Td };
