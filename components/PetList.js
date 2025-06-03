import useSWR from "swr";
import PetCard from "./PetCard";
import styled from "styled-components";

export default function PetList() {
  const { data: pets, error, isLoading } = useSWR("/api/pets");

  console.log(pets, error, isLoading);

  if (error) return <p>Error loading your pets.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!pets || pets.length === 0) return <p>You have no pets yet.</p>;

  return (
    <StyledListWrapper>
      {pets.map((pet) => (
        <StyledCardWrapper key={pet._id}>
          <PetCard pet={pet} />
        </StyledCardWrapper>
      ))}
    </StyledListWrapper>
  );
}

const StyledListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: flex-start;
`;
const StyledCardWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 120px;
  margin: 0 0.5rem 1rem 0;
`;
