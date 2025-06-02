import PetCard from "@/components/PetCard";
import styled from "styled-components";
import PetForm from "@/components/PetForm";
import useSWR from "swr";
import { uid } from "uid";
import { useState } from "react";
import PetList from "@/components/PetList";

const fetcher = (url) => fetch(url).then(res => res.json());
  
export default function HomePage() {

  const { data: pets, error, mutate } = useSWR("/api/pets", fetcher);

  if (!pets && !error) return <p>Loading Pets...</p>;
  if (error) return <p>Error while loading</p>;
  if (!pets || pets.length === 0) return <p>No Pets found</p>;

  
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
        age: 0,
        character: petData.character,
        description: petData.description,
      },
      needs: {
        hunger: 100,
        energy: 100,
        entertainment: 100,
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

  const [isFormActive, setIsFormActive] = useState(false);

  function handleCloseForm() {
    setIsFormActive(false);
  }

  return (
    <Container>
      <Logo>LOGO</Logo>

      <NewsBanner>{mockNews.join(" | ")}</NewsBanner>

      <GreetingSection>
        <TextContent>
          <Greeting>Welcome!</Greeting>
          <p>
            Schön, dass du wieder da bist!
            <br />
            Deine Pets warten schon auf dich
            <br />
            <br />
            Was willst du heute machen?
          </p>
        </TextContent>
        <ImagePlaceholder>Bild</ImagePlaceholder>
      </GreetingSection>

      {isFormActive ? (
        <Button variant="pink" onClick={() => setIsFormActive(false)}>
          Close Form
        </Button>
      ) : (
        <Button variant="blue" onClick={() => setIsFormActive(true)}>
          New Pet
        </Button>
      )}

      {isFormActive && (
        <PetForm onSubmit={handleAddPet} onClose={handleCloseForm} />
      )}

      <PetList/>
    </Container>
  );
}


const Container = styled.div`
  padding: 24px;
`;

const Logo = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #4a90e2;
  margin-bottom: 20px;
`;

const NewsBanner = styled.div`
  background-color: #e1ecf9;
  color: #2c3e50;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 30px;
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
  font-size: 16px;
  border: 2px solid;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  color: ${(props) => (props.variant === "blue" ? "#4a90e2" : "#e91e63")};
  border-color: ${(props) =>
    props.variant === "blue" ? "#4a90e2" : "#e91e63"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "blue" ? "#e1ecf9" : "#fce4ec"};
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



