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
  padding: 15px 0;
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

const PetName = styled.h1`
  margin: 0;
  font-size: 1.5rem;

`;
