import styled from "styled-components";
import { useRef } from "react";

export default function PetInteractionButton({ interaction, petId, onInteracted }) {
  const soundRef = useRef(null);

  const config = {
    feed: {
      label: "Feed 🍩",
      color: "#ff6f61",
      sound: "/sounds/nomnom.mp3",
      needKey: "hunger",
      timestampKey: "lastFed",
    },
    play: {
      label: "Sleep 💤",
      color: "#6fcf97",
      sound: "/sounds/nomnom.mp3",
      needKey: "energy",
      timestampKey: "lastSlept",
    },
    sleep: {
      label: "Play 🥎",
      color: "#56ccf2",
      sound: "/sounds/nomnom.mp3",
      needKey: "entertainment",
      timestampKey: "lastPlayed",
    },
  };

  const current = config[interaction];

  async function handleClick() {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      try {
        await soundRef.current.play();
      } catch (err) {
        console.error("Sound nicht da:", err);
      }
    }

    try {
      await fetch(`/api/pets/${petId}/interaction`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestampKey: current.timestampKey,
          needKey: current.needKey,
        }),
      });

      onInteracted?.();
    } catch (error) {
      console.error("Fehler Interaktion:", error);
    }
  }

  return (
    <>
      <ButtonStyled onClick={handleClick} bg={current.color}>
        {current.label}
      </ButtonStyled>
      <audio ref={soundRef} src={current.sound} />
    </>
  );
}

const ButtonStyled = styled.button`
  background-color: white;
  border: 2px solid ${(props) => props.bg};
  color: black;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  width: 90px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s, color 0.2s;

  &:active {
    background-color: ${(props) => props.bg};
    color: white;
    transform: scale(0.80);
  }
`;