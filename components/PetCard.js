import styled from "styled-components";
import Link from "next/link";
import PetDisplay from "./PetDisplay";
import PetHappiness from "./PetHappiness";

export default function PetCard({ pet }) {
  return (
    <StyledLink href={`/pets/${pet._id}/interaction`}>
      <StyledCard>
        <Name>{pet.name}</Name>
        <PetDisplay
          appearance={pet.appearance}
          hasBorder={false}
          dimensions={250}
        />
        <PetHappiness mood={pet.mood} showTitle={false} />
      </StyledCard>
    </StyledLink>
  );
}
const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #5885da;
  border-radius: 8px;
  background: white;
  padding-bottom: 2.5rem;
`;

const Name = styled.p`
  font-family: 'Press Start 2P', monospace;
  font-weight: bold;
  margin: 1rem 0;
  font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
