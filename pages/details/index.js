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
      <StyledLabel>Character:</StyledLabel>
      <StyledCharacterTag>playful</StyledCharacterTag>
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
  border-bottom: 3px solid #5885DA;
`;

const StyledWrapperFirstDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StyledDetailsList = styled.ul`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

const StyledLabel = styled.span`
  font-weight: 800;
`;

const StyledValue = styled.span`
  flex: 1;
`;

const StyledImage = styled.section`
  border: 1px solid #000;
  width: 150px;
  height: auto;
`;

const StyledCharacterTag = styled.p`
  display: inline-block;
  padding: 0.15rem 0.75rem;
  border: 1px solid #EA738D;
  border-radius: 4px;
  color: #333;
  margin-left: 0.7rem;
`;

const StyledButtonModify = styled.button`
  border: 3px #5885DA solid;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
`;

const StyledButtonDelete = styled(StyledButtonModify)`
  border: 3px #FF3021 solid;
`;

const StyledWrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2em;
  margin-top: 1em;
`;
