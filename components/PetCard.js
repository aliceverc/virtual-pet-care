import Link from "next/link";
import styled from "styled-components";
import PetDisplay from "@/components/PetDisplay";
import NeedsBar from "./NeedsBar";

export default function PetCard({ pet }) {
  return (
    <Link href={`/pets/${pet._id}`} passHref>
      <Card>
        <PetDisplay appearance={pet.appearance} />
        <PetName>{pet.name}</PetName>
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
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const NeedsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
