import styled from "styled-components";
import PetNav from "@/components/PetNav";

export default function InteractionPage() {
  return (
    <>
      <StyledSection>
        <StyledHeader>Pet Name</StyledHeader>
        <StyledImageSetion />
        <StyledButtonContainer>
          <StyledButton>Interact</StyledButton>
          <StyledButton>Interact</StyledButton>
          <StyledButton>Interact</StyledButton>
        </StyledButtonContainer>
      </StyledSection>
      <PetNav />
    </>
  );
}

const StyledSection = styled.section`
  display: grid;
  place-items: center;
`;

const StyledHeader = styled.h2`
  padding: 15px;
  width: 200px;
  text-align: center;
  border-bottom: 3px solid #5885da;
`;

const StyledImageSetion = styled.section`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border: 2px solid #333;
  border-radius: 3px;
`;

const StyledButtonContainer = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1rem;
  background-color: white;
  padding: 5px 20px;
  border-radius: 2px;
  border: 2px solid #333;
`;
