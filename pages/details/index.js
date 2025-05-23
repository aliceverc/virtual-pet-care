import styled from "styled-components";

export default function PetDetails() {
  return (
    <StyledSection>
      <StyledHeading>Details</StyledHeading>
      <StyledWrapperFirstDetails>
        <StyledDetailsList>
          <StyledRow>
            <StyledLabel>Name:</StyledLabel>
            <StyledValue>Fluffy</StyledValue>
          </StyledRow>

          <StyledRow>
            <StyledLabel>Species:</StyledLabel>
            <StyledValue>Cat</StyledValue>
          </StyledRow>

          <StyledRow>
            <StyledLabel>Diet:</StyledLabel>
            <StyledValue>Omnivore</StyledValue>
          </StyledRow>
        </StyledDetailsList>

        <StyledImage></StyledImage>
      </StyledWrapperFirstDetails>
      <StyledLabel>Description:</StyledLabel>
      <p>
        A small, curious house cat with velvety soft fur in a warm cream-beige
        colour, amber-coloured eyes and an elegantly curved tail. She moves
        quietly like a shadow, but as soon as she gains confidence, she purrs
        loudly and demands to be stroked extensively. Despite her gentle nature,
        there is always a spark of adventure in her eyes - ready to chase after
        every feather that flies by.
      </p>
      <StyledLabel>
        Character: <StyledCharacterTag>playful</StyledCharacterTag>
      </StyledLabel>
      <StyledWrapperButtons>
        <StyledButtonModify>Modify</StyledButtonModify>
        <StyledButtonDelete>Set free</StyledButtonDelete>
      </StyledWrapperButtons>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 1.5rem 1rem 3rem;
  line-height: 1.4;
`;

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  width: 100px;
  margin: 0 auto 1em;
  padding-bottom: 0.4rem;
  border-bottom: 3px solid #5885da;
`;

const StyledWrapperFirstDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledDetailsList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin: 0.5em 0;
`;

const StyledLabel = styled.p`
  font-weight: 800;
  margin: 0;
`;

const StyledValue = styled.p`
  margin: 0;
`;

const StyledImage = styled.section`
  border: 1px solid #000;
  width: 150px;
  height: auto;
`;

const StyledCharacterTag = styled.span`
  display: inline-block;
  padding: 0.15rem 0.75rem;
  border: 1px solid #ea738d;
  border-radius: 4px;
  color: #333;
  margin-left: 0.7rem;
`;

const StyledButtonModify = styled.button`
  border: 3px #5885da solid;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
`;

const StyledButtonDelete = styled(StyledButtonModify)`
  border: 3px #ff3021 solid;
`;

const StyledWrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-top: 2em;
`;
