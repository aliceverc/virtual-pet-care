import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  

  html, body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    min-height: 100vh;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("/background2.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
    z-index: -1;
  }

  body {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 16px;
  }
`;
