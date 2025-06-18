import styled from "styled-components";

export default function PetHappiness({ mood, showTitle = true }) {
  let emoji = "😐";
  if (mood > 70) emoji = "😄";
  else if (mood < 30) emoji = "😢";

  return (
    <>
      {showTitle && <h3>Mood</h3>}
      <Emoji>{emoji}</Emoji>
    </>
  );
}

const Emoji = styled.span`
  font-size: 2rem;
  margin-left: auto;
`;
