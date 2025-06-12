import styled from "styled-components";
import PetNav from "@/components/PetNav";
import PetDisplay from "@/components/PetDisplay";
import NeedsBar from "@/components/NeedsBar";
import PetHappiness from "@/components/PetHappiness";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import PetInteractionButton from "@/components/PetInteractionButtons";
import Logo from "@/components/Logo";

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
      <Logo />
      <StyledMain>
        <StyledHeader>
          {pet.name}
          <PetHappiness mood={pet.mood} showTitle={false} />
        </StyledHeader>
        <PetDisplay
          appearance={pet.appearance}
          dimensions={250}
          hasBorder="true"
        />
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
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButtonContainer = styled.section`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const NeedsBarsContainer = styled(StyledButtonContainer)`
  margin-top: 50px;
`;

