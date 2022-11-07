import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body.active {
  overflow: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

button, a, input, img {
  display: inline-block;
}
button {
  border: 0;
}
a {
  text-decoration: none;
}
/* Pagination Styles */
.pagination-list {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0 20px 0;
  list-style: none;
}
.pagination-list__item {
  cursor: pointer;
  color: hsl(204, 45%, 53%);
  font-size: 20px;
  font-weight: 600;
}
.pagination-list__previous-item, .pagination-list__next-item {
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: hsl(204, 45%, 53%);
}
.pagination-list__disabled-item {
  cursor: not-allowed !important;
  opacity: .4;
}
.pagination-list__disabled-link {
  cursor: not-allowed !important;
}

.pagination-list__active-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: hsl(204, 45%, 53%);
  color: #fff;
}
.pagination-list__ellipses-item {
  font-size: 25px;
  color: hsl(204, 45%, 53%);
}
`;

export default GlobalStyle;
