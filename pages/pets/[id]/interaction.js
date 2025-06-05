import styled from "styled-components";
import PetNav from "@/components/PetNav";
import PetDisplay from "@/components/PetDisplay";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useEffect } from "react";


export default function InteractionPage() {

  const router = useRouter();
  const { id } = router.query;

  const { data: pet, error, isLoading } = useSWR(id ? `/api/pets/${id}` : null);

    useEffect(() => {
    if (id) console.log("ID ist vorhanden:", id);
  }, [id]);

    useEffect(() => {
    if (pet) console.log("Geladenes Pet:", pet);
  }, [pet]);

  if (!id) return <p>Warte auf ID...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load pet data</p>;
  if (!pet) return <p>No pet found.</p>;

  return (
    <>
      <StyledMain>
        <StyledHeader>{pet.details.name}</StyledHeader>
        <PetDisplay appearance={pet.appearance} dimensions={250} hasBorder="true" />
        <StyledButtonContainer>
          <StyledButton>Interact</StyledButton>
          <StyledButton>Interact</StyledButton>
          <StyledButton>Interact</StyledButton>
        </StyledButtonContainer>
      </StyledMain>
      <PetNav />
    </>
  );
}

const StyledMain = styled.main`
  display: grid;
  place-items: center;
`;

const StyledHeader = styled.h2`
  padding: 15px;
  width: 200px;
  text-align: center;
  border-bottom: 3px solid #5885da;
`;

const StyledButtonContainer = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1rem;
  background-color: white;
  padding: 5px 20px;
  border-radius: 2px;
  border: 2px solid #333;
`;
