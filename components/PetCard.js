import styled from "styled-components";

export default function PetCard({ pet }) {
  const { details, appearance } = pet;
  const name = details.name;

  return (
    <StyledCard>
      <CardDisplay
        style={{
          backgroundColor: appearance.colors[0],
          width: appearance.width,
          height: appearance.height,
          border: `${appearance.borderStrength}px ${appearance.borderStyle} ${appearance.borderColor}`,
        }}
      />
      <Name>{name}</Name>
      <div>❤️</div>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8em;
  border: 2px solid #5885da;
  border-radius: 8px;
  background: white;
`;
const CardDisplay = styled.div`
  border-radius: 50%;
  margin-bottom: 0.5em;
`;

const Name = styled.p`
  font-weight: 600;
  margin: 0.5em 0;
`;
