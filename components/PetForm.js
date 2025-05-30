import { useState } from "react";
import styled from "styled-components";

export default function PetForm({ onSubmit, onClose, onUpdatePreview }) {
  const [colorAmount, setColorAmount] = useState(1);

  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Create your Pet:</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" required></input>
      <PreviewPlaceholder />
      <button type="button">Update Preview</button>
      <h3>Appearance</h3>
      <div>
        <input
          type="radio"
          name="colorsAmount"
          id="singleColor"
          onChange={() => setColorAmount(1)}
          defaultChecked
          value="1"
        />
        <label htmlFor="singleColor">Single Color</label>
      </div>
      <div>
        <input
          type="radio"
          name="colorsAmount"
          id="duoColor"
          onChange={() => setColorAmount(2)}
          value="2"
        />
        <label htmlFor="duoColor">Duo Color</label>
      </div>
      <div>
        <input
          type="radio"
          name="colorsAmount"
          id="tripleColor"
          onChange={() => setColorAmount(3)}
          value="3"
        />
        <label htmlFor="tripleColor">Triple Color</label>
      </div>
      <input type="color" name="firstColor" defaultValue="#EA738D" />
      {colorAmount > 1 && (
        <input type="color" name="secondColor" defaultValue="#EA738D" />
      )}
      {colorAmount > 2 && (
        <input type="color" name="thirdColor" defaultValue="#EA738D" />
      )}
      <br />
      <StyledGrid>
        <label htmlFor="width">Width:</label>
        <input id="width" name="width" type="range" min="50" max="200" />
        <label htmlFor="height">Height:</label>
        <input id="height" name="height" type="range" min="50" max="200" />
        <label htmlFor="shape">Shape:</label>
        <input id="shape" name="shape" type="range" min="0" max="50" />
        <label htmlFor="borderColor">Border Color:</label>
        <input
          id="borderColor"
          name="borderColor"
          type="color"
          defaultValue="#EA738D"
        />
        <label htmlFor="borderStrength">Border Strength:</label>
        <input
          id="borderStrength"
          name="borderStrength"
          type="range"
          min="0"
          max="6"
        />
        <label htmlFor="borderStyle">Border Style:</label>
        <select id="borderStyle" name="borderStyle">
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
          <option value="double">Double</option>
        </select>
        <StyledHeader>Details</StyledHeader>
        <label htmlFor="character">Character:</label>
        <select id="character" name="character">
          <option value="balanced">Balanced</option>
          <option value="playful">Playful</option>
          <option value="relaxed">Relaxed</option>
          <option value="gourmet">Gourmet</option>
        </select>
      </StyledGrid>
      <StyledLabel htmlFor="description">Description:</StyledLabel>
      <StyledTextArea
        id="description"
        name="description"
        rows="4"
        maxLength="255"
      ></StyledTextArea>
      <button onClick={onClose}>Cancel</button>
      <button type="submit">Add Pet</button>
    </StyledForm>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const StyledHeader = styled.h3`
  grid-column: 1/-1;
`;

const StyledForm = styled.form`
  //place-items: center;
  margin-bottom: 20px;
`;

const PreviewPlaceholder = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid #333;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  place-self: start;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
`;
