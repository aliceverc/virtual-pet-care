import styled from "styled-components";

export default function DeleteConfirmation({ petName, onDeleteName }) {
  return (
    <ConfirmationContainer>
      <Confirmation>
        <ConfirmationMessage>
          {petName} went back to the forest, your eyes start tearing up as you
          go home. You will miss them . . .
        </ConfirmationMessage>
        <StyledButtonQuit onClick={() => onDeleteName(false)}>
          Start crying.
        </StyledButtonQuit>
      </Confirmation>
    </ConfirmationContainer>
  );
}

const ConfirmationContainer = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Confirmation = styled.section`
  border: 3px solid #e91e63;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 327px;
  line-height: 25px;
`;

const ConfirmationMessage = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

const StyledButtonQuit = styled.button`
  font-size: 18px;
  border: 3px solid #666;
  background-color: #fff;
  border-radius: 6px;
  padding: 12px 24px;
  font-weight: 600;
  color: #444;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
