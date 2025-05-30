import { keyframes } from "styled-components";
import styled from "styled-components";

const defaultAppearance = {
  colors: ["#5885DA"],
  height: 80,
  width: 80,
  shape: 3,
  borderColor: "#000",
  borderStrength: 0,
  borderStyle: "solid",
};

export default function PetDisplay({ appearance }) {
  return (
    <PetContainer>
      <Pet $appearance={appearance ? appearance : defaultAppearance}>
        <Eye />
        <Eye />
      </Pet>
    </PetContainer>
  );
}

const PetContainer = styled.figure`
  border: 3px solid #333;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const idle = keyframes`  
  0% {
    transform: scale(1.05, 1);
  }
  40% {
    transform: scale(1, 1.1);
  }
  100% {
    transform: scale(1.05, 1);
  }`;

const Pet = styled.div`
  width: ${(props) => props.$appearance.width + "px"};
  height: ${(props) => props.$appearance.height + "px"};
  background: linear-gradient(
    180deg,
    ${(props) =>
        props.$appearance.colors.length == 1 &&
        props.$appearance.colors[0] + " 0%"}
      ${(props) =>
        props.$appearance.colors.length == 2 &&
        props.$appearance.colors[0] +
          " 0%, " +
          props.$appearance.colors[1] +
          " 100%"}
      ${(props) =>
        props.$appearance.colors.length == 3 &&
        props.$appearance.colors[0] +
          " 0%, " +
          props.$appearance.colors[1] +
          " 50%, " +
          props.$appearance.colors[2] +
          " 100%"}
  );

  border-radius: ${(props) => props.$appearance.shape + "%"};
  border: ${(props) => `
    ${props.$appearance.borderStrength}px 
    ${props.$appearance.borderStyle} 
    ${props.$appearance.borderColor}`};
  animation: ${idle} 2.5s infinite;
  transform-origin: bottom center;
  display: flex;
  justify-content: space-evenly;
`;

const Eye = styled.div`
  margin-top: 10px;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  border: 4px solid white;
  background-color: black;
`;
