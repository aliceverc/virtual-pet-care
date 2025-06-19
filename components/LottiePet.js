import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "./animations/pet.json";

export default function LottiePet() {
  return (
    <LottieContainer>
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      />
    </LottieContainer>
  );
}

const LottieContainer = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
`;
