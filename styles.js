import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: url("/background2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.3;
  z-index: -1;
}
`;
