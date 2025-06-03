import styled from "styled-components";

export default function NeedsBar({ need, value }) {
  const colors = {
    hunger: "#ff6f61",
    energy: "#6fcf97",
    entertainment: "#56ccf2",
  };

  return (
    <Wrapper>
      <Label>{need.toUpperCase()}</Label>
      <BarBackground>
        <BarFill color={colors[need]} value={value} />
      </BarBackground>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

const BarBackground = styled.div`
  background-color: #eee;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  background-color: ${(props) => props.color || "#999"};
  width: ${(props) => props.value}%;
`;