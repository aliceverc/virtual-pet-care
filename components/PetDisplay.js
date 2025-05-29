import { keyframes } from "styled-components";
import styled from "styled-components";

export default function PetDisplay({ appearance }) {
  return (
    <PetContainer>
      <Pet $appearance={appearance}>
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
  background-color: ${(props) => props.$appearance.colors[1]};
  border-radius: ${(props) => props.$appearance.shape + "%"};
  //border funktioniert noch nicht
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
