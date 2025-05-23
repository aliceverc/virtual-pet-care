import styled from "styled-components";

export default function PetNav() {
  return (
    <StyledNav>
      <StyledButtonActive>Interaction</StyledButtonActive>
      <StyledButtonInactive>Details</StyledButtonInactive>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  border-top: 3px solid #5885da;
  display: flex;
  justify-content: space-evenly;
`;

const StyledButtonInactive = styled.button`
  margin: 15px;
  font-family: inherit;
  font-size: 1rem;
  background-color: white;
  padding: 5px 20px;
  width: 160px;
  border-radius: 3px;
  border: 3px solid #aaa;
`;

const StyledButtonActive = styled(StyledButtonInactive)`
  border: none;
  background-color: #5885da;
  color: white;
`;
