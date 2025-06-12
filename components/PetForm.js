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
      <StyledInput id="name" name="name" required></StyledInput>
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
        <RadioWrapper>
          <Radio
            name="colorsAmount"
            id="singleColor"
            defaultChecked
            value="1"
          />
          <RadioFill />
          <RadioLabel htmlFor="singleColor">Single Color</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <Radio name="colorsAmount" id="duoColor" value="2" />
          <RadioFill />
          <RadioLabel htmlFor="duoColor">Duo Color</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <Radio name="colorsAmount" id="tripleColor" value="3" />
          <RadioFill />
          <RadioLabel htmlFor="tripleColor">Triple Color</RadioLabel>
        </RadioWrapper>
      </SingleLine>
      <SingleLine>
        <ColorInput
          type="color"
          name="firstColor"
          defaultValue={previewData.colors[0]}
        />
        {colorAmount > 1 && (
          <ColorInput type="color" name="secondColor" defaultValue="#EA738D" />
        )}
        {colorAmount > 2 && (
          <ColorInput type="color" name="thirdColor" defaultValue="#EA738D" />
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
      <StyledSelect id="borderStyle" name="borderStyle">
        <option value="solid">Solid</option>
        <option value="dashed">Dashed</option>
        <option value="dotted">Dotted</option>
        <option value="double">Double</option>
      </StyledSelect>
      <StyledHeader2>Details</StyledHeader2>
      <label htmlFor="character">Character:</label>
      <StyledSelect id="character" name="character">
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
      ></StyledTextArea>
      <SingleLine>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
        <Button type="submit">Add Pet</Button>
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

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 20px;
  height: 20px;
  margin: 0;
  border: 2px solid #aaa;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  outline: none;

  &:checked + span {
    background: #a475e4;
    transform: scale(1);
  }
`;

const RadioFill = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #a475e4;
  transform: scale(0);
  transition: transform 0.2s ease-in-out;
  pointer-events: none;
`;


const RadioLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

const ColorInput = styled.input`
  background-color: white;
  border-radius: 5px;
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

const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 15px;
  font-size: 1em;
  font-weight: 600;
  border: 2px solid;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  color: ${(props) => (props.variant === "blue" ? "#e91e63" : "#4a90e2")};
  border-color: ${(props) =>
    props.variant === "blue" ? "#e91e63" : "#4a90e2"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "blue" ? "#fce4ec" : "#e1ecf9"};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  grid-column: 1/3;
  grid-row: span 3;
`;
