import { useState } from "react";
import styled from "styled-components";
import PetDisplay from "./PetDisplay";

export default function PetForm({ onSubmit, onClose }) {
  const [colorAmount, setColorAmount] = useState(1);
  const [previewData, setPreviewData] = useState({
    borderColor: "#ea738d",
    borderStrength: 0,
    borderStyle: "solid",
    colors: ["#ea738d"],
    height: 50,
    shape: 5,
    width: 50,
  });

  function handleUpdatePreview(event) {
    event.preventDefault();
    const form = event.currentTarget.form;
    const formData = new FormData(form);
    const petData = Object.fromEntries(formData);
    setPreviewData({
      colors: [
        petData.firstColor,
        petData.secondColor,
        petData.thirdColor,
      ].filter(Boolean),
      height: parseInt(petData.height),
      width: parseInt(petData.width),
      shape: parseInt(petData.shape),
      borderColor: petData.borderColor,
      borderStrength: parseInt(petData.borderStrength),
      borderStyle: petData.borderStyle,
    });
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeader1>Create your Pet:</StyledHeader1>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" required></input>
      <PreviewContainer>
        <PetDisplay dimensions="246" appearance={previewData} />
      </PreviewContainer>
      <CenteredButton
        type="button"
        onClick={(event) => handleUpdatePreview(event)}
      >
        Update Preview
      </CenteredButton>
      <StyledHeader2>Appearance</StyledHeader2>
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
      <SingleLine>
        <input
          type="color"
          name="firstColor"
          defaultValue={previewData.colors[0]}
        />
        {colorAmount > 1 && (
          <input type="color" name="secondColor" defaultValue="#EA738D" />
        )}
        {colorAmount > 2 && (
          <input type="color" name="thirdColor" defaultValue="#EA738D" />
        )}
      </SingleLine>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        type="range"
        min="20"
        max="80"
        defaultValue={previewData.width}
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        type="range"
        min="20"
        max="80"
        defaultValue={previewData.height}
      />
      <label htmlFor="shape">Shape:</label>
      <input
        id="shape"
        name="shape"
        type="range"
        min="0"
        max="50"
        defaultValue={previewData.shape}
      />
      <label htmlFor="borderColor">Border Color:</label>
      <BorderColorInput
        id="borderColor"
        name="borderColor"
        type="color"
        defaultValue={previewData.borderColor}
      />
      <label htmlFor="borderStrength">Border Strength:</label>
      <input
        id="borderStrength"
        name="borderStrength"
        type="range"
        min="0"
        max="6"
        defaultValue={previewData.borderStrength}
      />
      <label htmlFor="borderStyle">Border Style:</label>
      <select id="borderStyle" name="borderStyle">
        <option value="solid">Solid</option>
        <option value="dashed">Dashed</option>
        <option value="dotted">Dotted</option>
        <option value="double">Double</option>
      </select>
      <StyledHeader2>Details</StyledHeader2>
      <label htmlFor="character">Character:</label>
      <select id="character" name="character">
        <option value="balanced">Balanced</option>
        <option value="playful">Playful</option>
        <option value="relaxed">Relaxed</option>
        <option value="gourmet">Gourmet</option>
      </select>
      <label htmlFor="description">Description:</label>
      <StyledTextArea
        id="description"
        name="description"
        rows="4"
        maxLength="255"
      ></StyledTextArea>
      <SingleLine>
        <button onClick={onClose}>Cancel</button>
        <button type="submit">Add Pet</button>
      </SingleLine>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-bottom: 20px;
  align-items: start;
  gap: 15px 0;
`;

const StyledHeader1 = styled.h2`
  grid-column: 1/3;
  margin: 0;
`;

const StyledHeader2 = styled.h3`
  grid-column: 1/3;
  margin: 0;
`;

const PreviewContainer = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid #333;
  border-radius: 5px;
  grid-row: 3 / span 6;
  grid-column: 1/3;
  place-self: center;
  display: flex;
  justify-content: center;
`;

const CenteredButton = styled.button`
  grid-column: 1/3;
  place-self: center;
`;

const SingleLine = styled.section`
  display: flex;
  grid-column: 1/3;
  justify-content: space-around;
  width: 100%;
`;

const BorderColorInput = styled.input`
  place-self: end;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  grid-column: 1/3;
  grid-row: span 3;
`;
