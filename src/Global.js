import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
