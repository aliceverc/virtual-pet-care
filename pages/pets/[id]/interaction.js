import styled from "styled-components";
import PetNav from "@/components/PetNav";
import PetDisplay from "@/components/PetDisplay";
import NeedsBar from "@/components/NeedsBar";
import PetHeader from "@/components/PetHeader";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import PetInteractionButton from "@/components/PetInteractionButtons";

export default function InteractionPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: pet,
    error,
    isLoading,
    mutate,
  } = useSWR(id ? `/api/pets/${id}/interaction` : null);

  useEffect(() => {
    const refreshInterval = setInterval(() => mutate(), 60000);
    return () => clearInterval(refreshInterval);
  }, [mutate]);

  if (!id) return <p>Warte auf ID...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load pet data</p>;
  if (!pet) return <p>No pet found.</p>;

  return (
    <>
      <StyledMain>
        <PetHeader name={pet.name} mood={pet.mood} />
        <PetDisplay
          appearance={pet.appearance}
          dimensions={250}
          hasBorder="true"
        />
        <StyledNeedsContainer>
        <NeedsBarsContainer>
          <NeedsBar need="hunger" value={pet.hunger} />
          <NeedsBar need="energy" value={pet.energy} />
          <NeedsBar need="fun" value={pet.entertainment} />
        </NeedsBarsContainer>
        <StyledButtonContainer>
          <PetInteractionButton petId={id} interaction="feed" onInteracted={mutate} />
          <PetInteractionButton petId={id} interaction="play" onInteracted={mutate} />
          <PetInteractionButton petId={id} interaction="sleep" onInteracted={mutate} />
        </StyledButtonContainer>
        </StyledNeedsContainer>
      </StyledMain>
      <PetNav />
    </>
  );
}

const StyledMain = styled.main`
  display: grid;
  place-items: center;
`;

const StyledButtonContainer = styled.section`
  font-family: 'Press Start 2P', monospace;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 8px;
`;

const StyledNeedsContainer = styled.div `
  padding: 20px 15px;
  margin-top: 50px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`

const NeedsBarsContainer = styled(StyledButtonContainer)`
  margin-top: 0px;
`;