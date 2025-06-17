import { useState } from "react";
import styled from "styled-components";
import PetDisplay from "./PetDisplay";

export default function PetForm({ onSubmit, onClose, currentData }) {
  const [colorAmount, setColorAmount] = useState(
    currentData ? currentData.appearance.colors.length : 1
  );
  const [previewData, setPreviewData] = useState(
    currentData
      ? currentData.appearance
      : {
          borderColor: "#ea738d",
          borderStrength: 0,
          borderStyle: "solid",
          colors: ["#ea738d"],
          height: 50,
          shape: 5,
          width: 50,
        }
  );

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
      <StyledInput
        id="name"
        name="name"
        defaultValue={currentData?.details.name || ""}
        maxLength="20"
        required
      ></StyledInput>
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
        <RadioGroup>
          <HiddenRadio
            name="colorsAmount"
            id="singleColor"
            onChange={() => setColorAmount(1)}
            defaultChecked={
              currentData ? currentData.appearance.colors.length === 1 : true
            }
            value="1"
          />
          <StyledRadioLabel htmlFor="singleColor">
            Single Color
          </StyledRadioLabel>
        </RadioGroup>
        <RadioGroup>
          <HiddenRadio
            type="radio"
            name="colorsAmount"
            id="duoColor"
            onChange={() => setColorAmount(2)}
            defaultChecked={currentData?.appearance.colors.length === 2}
            value="2"
          />
          <StyledRadioLabel htmlFor="duoColor">Duo Color</StyledRadioLabel>
        </RadioGroup>
        <RadioGroup>
          <HiddenRadio
            type="radio"
            name="colorsAmount"
            id="tripleColor"
            onChange={() => setColorAmount(3)}
            defaultChecked={currentData?.appearance.colors.length === 3}
            value="3"
          />
          <StyledRadioLabel htmlFor="tripleColor">
            Triple Color
          </StyledRadioLabel>
        </RadioGroup>
      </SingleLine>
      <SingleLine>
        <ColorInput
          type="color"
          name="firstColor"
          defaultValue={
            currentData?.appearance.colors[0] || previewData.colors[0]
          }
        />
        {colorAmount > 1 && (
          <ColorInput
            type="color"
            name="secondColor"
            defaultValue={currentData?.appearance.colors[1] || "#EA738D"}
          />
        )}
        {colorAmount > 2 && (
          <ColorInput
            type="color"
            name="thirdColor"
            defaultValue={currentData?.appearance.colors[2] || "#EA738D"}
          />
        )}
      </SingleLine>
      <label htmlFor="width">Width:</label>
      <StyledRange
        id="width"
        name="width"
        type="range"
        min="20"
        max="80"
        defaultValue={currentData?.appearance.width || previewData.width}
      />
      <label htmlFor="height">Height:</label>
      <StyledRange
        id="height"
        name="height"
        type="range"
        min="20"
        max="80"
        defaultValue={currentData?.appearance.height || previewData.height}
      />
      <label htmlFor="shape">Shape:</label>
      <StyledRange
        id="shape"
        name="shape"
        type="range"
        min="0"
        max="50"
        defaultValue={currentData?.appearance.shape || previewData.shape}
      />
      <label htmlFor="borderColor">Border Color:</label>
      <BorderColorInput
        id="borderColor"
        name="borderColor"
        type="color"
        defaultValue={
          currentData?.appearance.borderColor || previewData.borderColor
        }
      />
      <label htmlFor="borderStrength">Border Strength:</label>
      <StyledRange
        id="borderStrength"
        name="borderStrength"
        type="range"
        min="0"
        max="6"
        defaultValue={
          currentData?.appearance.borderStrength || previewData.borderStrength
        }
      />
      <label htmlFor="borderStyle">Border Style:</label>
      <StyledSelect
        id="borderStyle"
        name="borderStyle"
        defaultValue={currentData?.appearance.borderStyle}
      >
        <option value="solid">Solid</option>
        <option value="dashed">Dashed</option>
        <option value="dotted">Dotted</option>
        <option value="double">Double</option>
      </StyledSelect>
      <StyledHeader2>Details</StyledHeader2>
      <label htmlFor="character">Character:</label>
      <StyledSelect
        id="character"
        name="character"
        defaultValue={currentData?.details.character}
      >
        <option value="balanced">Balanced</option>
        <option value="playful">Playful</option>
        <option value="relaxed">Relaxed</option>
        <option value="gourmet">Gourmet</option>
      </StyledSelect>
      <label htmlFor="description">Description:</label>
      <StyledTextArea
        id="description"
        name="description"
        rows="4"
        maxLength="255"
        defaultValue={currentData?.details.description}
      ></StyledTextArea>
      <SingleLine>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
        <Button type="submit">{currentData ? "Update Pet" : "Add Pet"}</Button>
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
  align-items: center;
  gap: 20px 0;
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

const StyledInput = styled.input`
  background-color: white;
  padding: 8px 5px;
  border-radius: 6px;
`;

const CenteredButton = styled.button`
  grid-column: 1/3;
  place-self: center;
  font-size: 1em;
  border: 3px solid
    ${({ variant }) => (variant === "delete" ? "#ff3021" : "#5885da")};
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 20px;
  font-weight: 600;
  color: #5885da;
  cursor: pointer;
  &:hover {
    background-color: #e1ecf9;
  }
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  left: -9999px;
`;

const StyledRadioLabel = styled.label`
  position: relative;
  padding-left: 20px; /* adjust spacing next to smaller radio */
  cursor: pointer;
  line-height: 16px;
  display: inline-block;
  color: #333;
  font-weight: 500;
  font-size: 15px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 17px;
    height: 17px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
  }

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background: #5885da;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    transition: all 0.2s ease;
    opacity: 0;
    transform: scale(0);
  }

  ${HiddenRadio}:checked + &::after {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledRange = styled.input.attrs({ type: "range" })`
  width: 100%;
  height: 6px;
  background: #d3d3d3;
  border-radius: 3px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #5885da;
    border: 2px solid white;
    box-shadow: 0 0 2px #888;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #5885da;
    border: 2px solid white;
    box-shadow: 0 0 2px #888;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: 6px;
    background: linear-gradient(to right, #c8dafd, #5885da);
    border-radius: 3px;
  }

  &::-moz-range-track {
    height: 6px;
    background: linear-gradient(to right, #c8dafd, #5885da);
    border-radius: 3px;
  }
`;

const ColorInput = styled.input`
  background-color: white;
  border-radius: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* spacing between radio and label */
  margin-right: 0.2rem; /* spacing between groups */
  font-size: 16px;
  color: #5885da;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  &:hover {
    background-color: #e1ecf9;
  }
`;

const SingleLine = styled.section`
  display: flex;
  grid-column: 1/3;
  justify-content: space-around;
  width: 100%;
`;

const StyledSelect = styled.select`
  background-color: white;
  padding: 8px 5px;
  border-radius: 6px;
`;

const BorderColorInput = styled.input`
  place-self: flex-start;
  background-color: white;
  border-radius: 5px;
`;

const ButtonCancel = styled.button`
  padding: 10px 20px;
  margin-bottom: 15px;
  font-size: 1em;
  font-weight: 600;
  border: 2px solid #aaa;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  font-weight: 600;
  font-size: 16px;
  color: #aaa;
  &:hover {
    background-color: #f1f0f0;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  grid-column: 1/3;
  grid-row: span 3;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #4a90e2;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  color: #4a90e2;

  &:hover {
    background-color: #e1ecf9;
  }
`;
