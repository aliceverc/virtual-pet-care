import styled from "styled-components";
import PetForm from "@/components/PetForm";
import useSWR from "swr";
import { uid } from "uid";
import { useState, useRef } from "react";
import PetList from "@/components/PetList";
import Header from "@/components/Header";
import LottiePet from "@/components/LottiePet";
import DeleteConfirmation from "@/components/DeleteConfirmation";

export default function HomePage({ deleteName, onDeleteName }) {
  const [isFormActive, setIsFormActive] = useState(false);
  const { mutate } = useSWR("/api/pets");
  const formRef = useRef(null);

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
      <Greeting>
        Welcome!
      </Greeting>
      {deleteName && (
        <DeleteConfirmation petName={deleteName} onDeleteName={onDeleteName} />
      )}
      <GreetingSection>
          <Text>
            <p>
              Nice to have you here. <br />
              Go ahead and create new Pets, care for them to make them happy and
              have fun while building your own Virtual Pet Care!
            </p>
          </Text>
          <Animation>
            <LottiePet />
          </Animation>
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
        <PetForm
          onSubmit={handleAddPet}
          onClose={handleCloseForm}
          formRef={formRef}
        />
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
  margin-bottom: 30px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;


const Text = styled.div`
  flex: 1;
  max-width: 250px;
  font-family: Nunito, sans-serif;
  line-height: 1.4em;
`;

const Animation = styled.div`
  flex-shrink: 0;
  max-width: 125px;
  height: auto;
`;


const Greeting = styled.h2`
  color: #4a90e2;
  font-size: 24px;
  font-family: Nunito, sans-serif;
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
