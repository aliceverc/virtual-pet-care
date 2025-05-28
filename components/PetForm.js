import { useState } from "react";
import styled from "styled-components";

export default function PetForm({ onSubmit, onClose, onUpdatePreview }) {
  const [colorAmount, setColorAmount] = useState(1);

  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Create your Pet:</h2>
      <SingleLineCentered>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" required></input>
      </SingleLineCentered>
      <PreviewPlaceholder />
      <button type="button">Update Preview</button>
      <h3>Appearance</h3>
      <SingleLine>
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
      </SingleLine>
      <SingleLineCentered>
        <input type="color" name="firstColor" defaultValue="#EA738D" />
        {colorAmount > 1 && (
          <input type="color" name="secondColor" defaultValue="#EA738D" />
        )}
        {colorAmount > 2 && (
          <input type="color" name="thirdColor" defaultValue="#EA738D" />
        )}
      </SingleLineCentered>
      <br />
      <SingleLine>
        <label htmlFor="width">Width:</label>
        <input id="width" name="width" type="range" min="50" max="200" />
      </SingleLine>
      <SingleLine>
        <label htmlFor="height">Height:</label>
        <input id="height" name="height" type="range" min="50" max="200" />
      </SingleLine>
      <SingleLine>
        <label htmlFor="shape">Shape:</label>
        <input id="shape" name="shape" type="range" min="0" max="50" />
      </SingleLine>
      <SingleLine>
        <label htmlFor="borderColor">Border Color:</label>
        <input
          id="borderColor"
          name="borderColor"
          type="color"
          defaultValue="#EA738D"
        />
      </SingleLine>
      <SingleLine>
        <label htmlFor="borderStrength">Border Strength:</label>
        <input
          id="borderStrength"
          name="borderStrength"
          type="range"
          min="0"
          max="6"
        />
      </SingleLine>
      <SingleLine>
        <label htmlFor="borderStyle">Border Style:</label>
        <select id="borderStyle" name="borderStyle">
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
          <option value="double">Double</option>
        </select>
      </SingleLine>
      <h3>Details</h3>
      <SingleLine>
        <label htmlFor="character">Character:</label>
        <select id="character" name="character">
          <option value="balanced">Balanced</option>
          <option value="playful">Playful</option>
          <option value="relaxed">Relaxed</option>
          <option value="gourmet">Gourmet</option>
        </select>
      </SingleLine>
      <StyledLabel htmlFor="description">Description:</StyledLabel>
      <StyledTextArea
        id="description"
        name="description"
        rows="4"
        maxLength="255"
      ></StyledTextArea>
      <SingleLineCentered>
        <button onClick={onClose}>Cancel</button>
        <button type="submit">Add Pet</button>
      </SingleLineCentered>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  place-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SingleLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SingleLineCentered = styled(SingleLine)`
  justify-content: space-around;
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
