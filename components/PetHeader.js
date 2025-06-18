import styled from "styled-components";
import Logo from "./Logo";
import PetHappiness from "./PetHappiness";

export default function PetHeader({ name, mood }) {
  return (
    <StyledHeader>
      <Logo />
      <PetName>{name}</PetName>
      {typeof mood === "number" && (
        <PetHappiness mood={mood} showTitle={false} />
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  padding: 15px 20px;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PetName = styled.h1`
  position: relative;
  margin: 0 auto;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
`;
