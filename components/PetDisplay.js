import { keyframes } from "styled-components";
import styled from "styled-components";

const defaultAppearance = {
  colors: ["#5885DA"],
  height: 100,
  width: 100,
  shape: 10,
  borderColor: "#000",
  borderStrength: 0,
  borderStyle: "solid",
};

export default function PetDisplay({ appearance, dimensions, hasBorder }) {
  return (
    <PetContainer $hasBorder={hasBorder} $dimensions={dimensions}>
      <Pet
        $appearance={appearance ? appearance : defaultAppearance}
        $dimensions={dimensions}
      >
        <Eye $dimensions={dimensions}>
          <Pupil />
        </Eye>
        <Eye $dimensions={dimensions}>
          <Pupil />
        </Eye>
      </Pet>
    </PetContainer>
  );
}

const PetContainer = styled.figure`
  border: ${(props) => (props.$hasBorder ? "2px" : "0px")} solid #333;
  border-radius: 10px;
  width: ${(props) => props.$dimensions + "px"};
  height: ${(props) => props.$dimensions + "px"};
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
  width: ${(props) => props.$appearance.width / 2.5 + "%"};
  height: ${(props) => props.$appearance.height / 2.5 + "%"};
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
  border-radius: ${(props) =>
    (props.$dimensions / 100) * props.$appearance.shape + "px"};
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
  margin-top: 10%;
  height: ${(props) => props.$dimensions / 12 + "px"};
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #eee;
  display: grid;
  place-items: center;
`;

const Pupil = styled.div`
  border-radius: 50%;
  background-color: black;
  height: 50%;
  width: 50%;
`;
