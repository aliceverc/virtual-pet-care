import styled from "styled-components";

export default function DeleteConfirmation({ petName }) {
  return (
    <ConfirmationContainer>
      <ConfirmationMessage>{petName} has been released. </ConfirmationMessage>
    </ConfirmationContainer>
  );
}

const ConfirmationContainer = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const ConfirmationMessage = styled.p`
  border: 3px solid #e91e63;
  width: 300px;
  height: 200px;
  background-color: white;
  padding: 30px;
`;
