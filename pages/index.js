import styled from "styled-components";
import PetForm from "@/components/PetForm";
import useSWR from "swr";
import { uid } from "uid";
import { useState } from "react";
import PetList from "@/components/PetList";
import Header from "@/components/Header";

export default function HomePage() {
  const [isFormActive, setIsFormActive] = useState(false);
  const { mutate } = useSWR("/api/pets");

  async function handleAddPet(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const petData = Object.fromEntries(formData);
    const formattedPetData = {
      id: uid(),
      appearance: {
        colors: [
          petData.firstColor,
          petData.secondColor,
          petData.thirdColor,
        ].filter(Boolean),
        height: parseInt(petData.height),
        width: parseInt(petData.width),
        shape: parseInt(petData.shape),
        borderColor: petData.borderColor,
        borderStrength: parseInt(petData.borderStrength),
        borderStyle: petData.borderStyle,
      },
      details: {
        name: petData.name,
        birthTime: new Date().toISOString(),
        character: petData.character,
        description: petData.description,
      },
      needs: {
        lastFed: Date.now(),
        lastSlept: Date.now(),
        lastPlayed: Date.now(),
      },
    };

    const response = await fetch("/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formattedPetData),
    });
    if (response.ok) mutate();
    handleCloseForm();
  }

  function handleCloseForm() {
    setIsFormActive(false);
  }

  return (
    <Container>
      <Header />

      <GreetingSection>
        <TextContent>
          <Greeting>Welcome!</Greeting>
          <p>
            Nice to have you here. <br />
            Go ahead and create new Pets, care for them to make them happy and
            have fun while building your own Virtual Pet Care!
          </p>
        </TextContent>
        <ImagePlaceholder>Bild</ImagePlaceholder>
      </GreetingSection>

      {isFormActive ? (
        <Button $variant="pink" onClick={() => setIsFormActive(false)}>
          Cancel
        </Button>
      ) : (
        <Button $variant="blue" onClick={() => setIsFormActive(true)}>
          New Pet
        </Button>
      )}

      {isFormActive && (
        <PetForm onSubmit={handleAddPet} onClose={handleCloseForm} />
      )}

      <PetList />
    </Container>
  );
}

const Container = styled.section`
  padding: 24px;
`;

const GreetingSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 30px;
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 250px;
  font-family: Nunito, sans-serif;
  line-height: 1.4em;
  padding: 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const Greeting = styled.h2`
  color: #4a90e2;
  font-size: 24px;
`;

const ImagePlaceholder = styled.div`
  width: 128px;
  height: 96px;
  background-color: #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 15px;
  font-size: 1em;
  font-weight: 600;
  border: 2px solid;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  color: ${(props) => (props.$variant === "blue" ? "#4a90e2" : "#e91e63")};
  border-color: ${(props) =>
    props.$variant === "blue" ? "#4a90e2" : "#e91e63"};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "blue" ? "#e1ecf9" : "#fce4ec"};
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  background: white;
  border: 2px solid #4a90e2;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 auto 12px;
`;

const PetName = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
`;

const NeedBar = styled.div`
  height: 8px;
  border-radius: 4px;
  margin: 3px 0;
  background-color: ${(props) => props.color};
`;
