import useSWR from "swr";
import PetCard from "./PetCard";
import styled from "styled-components";
import { useEffect } from "react";

export default function PetList() {
  const { data: pets, error, isLoading, mutate } = useSWR("/api/pets");

  useEffect(() => {
    const refreshInterval2 = setInterval(() => mutate(), 60000);
    return () => {
      clearInterval(refreshInterval2);
    };
  });

  if (error) return <p>Error loading your pets.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!pets || pets.length === 0) return <p>You have no pets yet.</p>;

  return (
    <StyledListWrapper>
      {pets
        .map((pet) => (
          <StyledCardWrapper key={pet._id}>
            <PetCard pet={pet} />
          </StyledCardWrapper>
        ))
        .reverse()}
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
  width: 100%;
  margin: 0 0 1rem 0;
`;
