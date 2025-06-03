import styled from "styled-components";
import Link from "next/link";

export default function PetCard({ pet }) {
  const { details, appearance } = pet;
  const name = details.name;
  return (
    <StyledLink href={`/pets/${pet._id}`} passHref>
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
    </StyledLink>
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
const StyledLink = styled(Link)`
  text-decoration: none;
`;

/*import Link from "next/link";
import styled from "styled-components";
import PetDisplay from "@/components/PetDisplay";
import NeedsBar from "./NeedsBar";

export default function PetCard({ pet }) {
  return (
    <Link href={`/pets/${pet._id}`} passHref>
      <Card>
        <PetDisplay appearance={pet.appearance} />
        <PetName>{pet.details.name}</PetName>
        <NeedsWrapper>
          {Object.entries(pet.needs).map(([need, value]) => (
            <NeedsBar key={need} need={need} value={value} />
          ))}
        </NeedsWrapper>
      </Card>
    </Link>
  );
}

const Card = styled.article`
  background: white;
  border: 2px solid #4a90e2;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
`;

const PetName = styled.h4`
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const NeedsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
*/
