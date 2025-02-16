import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

  body {
    margin: 0;
    padding: 0;
    background: whitesmoke;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100vh;
  }
`;
 
export default GlobalStyle;