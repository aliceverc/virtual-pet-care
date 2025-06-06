import { useRouter } from "next/router";
import useSWR from "swr";
import PetDisplay from "@/components/PetDisplay";
import PetHappiness from "@/components/PetHappiness";
import NeedsBar from "@/components/NeedsBar";
import PetNav from "@/components/PetNav";
import styled from "styled-components";
import { useState } from "react";

export default function PetDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data: pet, error, isLoading } = useSWR(id ? `/api/pets/${id}` : null);
  const [showDeleteBox, setShowDeleteBox] = useState(false);

  if (!id) return <p>Warte auf ID...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load pet data</p>;
  if (!pet) return <p>No pet found.</p>;

  async function handleConfirm() {
    const response = await fetch(`/api/pets/${pet._id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.error("Delete failed");
      return;
    }
    router.push("/");
  }

  return (
    <>
      <StyledHeading>Details</StyledHeading>
      <StyledHeadingName>{pet.details.name}</StyledHeadingName>

      <StyledWrapperFirstDetails>
        <PetDisplay
          appearance={pet.appearance}
          dimensions={250}
          hasBorder={true}
        />
        <PetHappiness needs={pet.needs} />
      </StyledWrapperFirstDetails>

      <StyledWrapperSecondDetails>
        <DetailText>
          <strong>Age:</strong> {pet.details.age}{" "}
          {pet.details.age === 1 ? "year" : "years"}
        </DetailText>
        <DetailText>
          <strong>Character:</strong> {pet.details.character}
        </DetailText>
        <DetailText>
          <strong>Description:</strong> {pet.details.description}
        </DetailText>
      </StyledWrapperSecondDetails>

      <StyledNeedsWrapper>
        <NeedsBar need="hunger" value={pet.needs.hunger} />
        <NeedsBar need="energy" value={pet.needs.energy} />
        <NeedsBar need="entertainment" value={pet.needs.entertainment} />
      </StyledNeedsWrapper>

      <InteractionButtons>
        <button>Eat</button>
        <button>Sleep</button>
        <button>Play</button>
      </InteractionButtons>

      <ButtonWrapper>
        <StyledButton variant="modify">Edit Pet</StyledButton>
        <StyledButton variant="delete" onClick={() => setShowDeleteBox(true)}>
          Release Pet
        </StyledButton>
      </ButtonWrapper>
      {showDeleteBox && (
        <StyledDeleteBox>
          <p>Do you really want to release your pet?</p>
          <StyledButton variant="delete" onClick={handleConfirm}>
            YES
          </StyledButton>
          <StyledButtonQuit
            variante="no"
            onClick={() => setShowDeleteBox(false)}
          >
            NO
          </StyledButtonQuit>
        </StyledDeleteBox>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <PetNav />
    </>
  );
}

const DetailText = styled.p`
  margin: 0.5rem 0;
  line-height: 1.4;
  font-size: 0.95rem;
  color: #333;
`;
const StyledHeading = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  width: 100px;
  margin: 0 auto 1em;
  padding-bottom: 0.4rem;
  border-bottom: 3px solid #5885da;
`;
const StyledHeadingName = styled.h2`
  text-align: center;
  font-size: 1.25rem;
`;
const StyledWrapperFirstDetails = styled.section`
  display: flex;
  justify-content: center;
  margin-right: 5%;
`;
const StyledWrapperSecondDetails = styled.section`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
const StyledNeedsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
`;
const StyledButton = styled.button`
  border: 3px solid
    ${({ variant }) => (variant === "delete" ? "#ff3021" : "#5885da")};
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  margin-bottom: 5%;
`;
const InteractionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
const ButtonWrapper = styled.section`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  background-color: transparent;
`;
const StyledDeleteBox = styled.div`
  z-index: 1;
  background-color: #fff;
  border: 2px solid #ff3021;
  padding: 1rem;
  margin-top: 0;
  text-align: center;
`;
const StyledButtonQuit = styled.button`
  border: 3px solid #aaa;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  margin-bottom: 5%;
  margin-left: 1em;
`;
