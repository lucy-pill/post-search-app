import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }
  
  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    background-color: #ffffff;
  }
`;

export default GlobalStyle;