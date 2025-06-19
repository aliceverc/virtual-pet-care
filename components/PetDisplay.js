import { useState } from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";

const defaultAppearance = {
  colors: ["#5885DA"],
  borderColor: "#ea738d",
  borderStrength: 0,
  borderStyle: "solid",
  height: 50,
  shape: 5,
  width: 50,
};

export default function PetDisplay({ appearance, dimensions, hasBorder }) {
  const [idleTiming] = useState(2 + Math.random());
  const [blinkTiming] = useState(2 + Math.random());

  return (
    <PetContainer $hasBorder={hasBorder} $dimensions={dimensions}>
      <Pet
        $appearance={appearance ? appearance : defaultAppearance}
        $dimensions={dimensions}
        $idleTiming={idleTiming}
      >
        <Eye $dimensions={dimensions} $blinkTiming={blinkTiming}>
          <Pupil />
        </Eye>
        <Eye $dimensions={dimensions} $blinkTiming={blinkTiming}>
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
  margin: 0;
  background-color: white;
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
  width: ${(props) => props.$appearance.width + "%"};
  height: ${(props) => props.$appearance.height + "%"};
  background: linear-gradient(
    180deg,
    ${(props) =>
        props.$appearance.colors.length == 1 &&
        props.$appearance.colors[0] +
          " 0%, " +
          props.$appearance.colors[0] +
          " 100%"}
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
    ${(props.$dimensions / 250) * props.$appearance.borderStrength}px 
    ${props.$appearance.borderStyle} 
    ${props.$appearance.borderColor}`};
  animation: ${idle} ${(props) => props.$idleTiming}s infinite;
  transform-origin: bottom center;
  display: flex;
  justify-content: space-evenly;
`;

const blinking = keyframes`
  0% {
    transform: scaleY(1);
  }
  90% {
    transform: scaleY(1);
  }
  95% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }`;

const Eye = styled.div`
  margin-top: 10%;
  height: ${(props) => props.$dimensions / 12 + "px"};
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #eee;
  display: grid;
  place-items: center;
  animation: ${blinking} ${(props) => props.$blinkTiming * 2}s infinite;
`;

const Pupil = styled.div`
  border-radius: 50%;
  background-color: black;
  height: 50%;
  width: 50%;
`;
