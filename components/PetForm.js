import styled from "styled-components";

export default function PetForm(onSubmit, onClose, onUpdatePreview) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Create your Pet:</h2>
      <SingleLineDiv>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" required></input>
      </SingleLineDiv>
      <PreviewPlaceholder />
      <button>Update Preview</button>
      <h3>Appearance</h3>
      <SingleLineDiv>
        <div>
          <input type="radio" name="colorsAmount" id="singleColor" value="1" />
          <label htmlFor="singleColor">Single Color</label>
        </div>
        <div>
          <input type="radio" name="colorsAmount" id="duoColor" value="2" />
          <label htmlFor="duoColor">Duo Color</label>
        </div>
        <div>
          <input type="radio" name="colorsAmount" id="tripleColor" value="3" />
          <label htmlFor="tripleColor">Triple Color</label>
        </div>
      </SingleLineDiv>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  place-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SingleLineDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const PreviewPlaceholder = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid #333;
`;
