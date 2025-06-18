import { useState } from "react";
import React from "react";
import styled from "styled-components";
import PetDisplay from "./PetDisplay";

export default function PetForm({ onSubmit, onClose, currentData }) {
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
  const [colorAmount, setColorAmount] = useState(
    currentData ? currentData.appearance.colors.length : 1
  );

  function handleUpdatePreview(event) {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const petData = Object.fromEntries(formData);
    setColorAmount(petData.colorsAmount);
    setPreviewData({
      colors: [
        petData.firstColor,
        petData.colorsAmount > 1 && petData.secondColor,
        petData.colorsAmount > 2 && petData.thirdColor,
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
    <StyledForm onSubmit={onSubmit} onChange={handleUpdatePreview}>
      <StyledHeader1>
        {currentData ? "Update your Pet:" : "Create your Pet:"}
      </StyledHeader1>
      <label htmlFor="name">Name: </label>
      <StyledName
        id="name"
        name="name"
        defaultValue={currentData?.details.name || ""}
        maxLength="20"
        required
      />
      <PreviewContainer>
        <PetDisplay dimensions="246" appearance={previewData} />
      </PreviewContainer>
      <StyledHeader2>Appearance</StyledHeader2>
      <SingleLine>
        <RadioGroup>
          <HiddenRadio
            name="colorsAmount"
            id="singleColor"
            defaultChecked={previewData.colors.length === 1}
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
            defaultChecked={previewData.colors.length === 2}
            value="2"
          />
          <StyledRadioLabel htmlFor="duoColor">Duo Color</StyledRadioLabel>
        </RadioGroup>
        <RadioGroup>
          <HiddenRadio
            type="radio"
            name="colorsAmount"
            id="tripleColor"
            defaultChecked={previewData.colors.length === 3}
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
          defaultValue={previewData.colors[0]}
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
      <input
        id="width"
        name="width"
        type="range"
        min="20"
        max="80"
        defaultValue={currentData?.appearance.width || previewData.width}
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        type="range"
        min="20"
        max="80"
        defaultValue={currentData?.appearance.height || previewData.height}
      />
      <label htmlFor="shape">Shape:</label>
      <input
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
      <input
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
  align-items: start;
  gap: 15px 0;
  font-family: Nunito, sans-serif;
  select {
    font-family: Nunito, sans-serif;
  }
  input {
    font-family: Nunito, sans-serif;
  }
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

const StyledName = styled.input`
  background-color: white;
  padding: 8px 5px;
  border-radius: 6px;
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

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  left: -9999px;
`;

const StyledRadioLabel = styled.label`
  position: relative;
  padding-left: 20px;
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

const ColorInput = styled.input`
  background-color: white;
  border-radius: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 0.2rem;
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
  font-family: Nunito, sans-serif;
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
