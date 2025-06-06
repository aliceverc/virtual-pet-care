import styled from 'styled-components';

export default function PetHappiness({ needs, showTitle = true }) {
  const values = Object.values(needs);
  const averageNeed = values.reduce((sum, val) => sum + val, 0) / values.length;

  let mood = "😐";
  if (averageNeed > 70) mood = "😄";
  else if (averageNeed < 30) mood = "😢";

  return (
    <div>
      {showTitle && <h3>Mood</h3>}
      <Emoji>{mood}</Emoji>
    </div>
  );
}

const Emoji = styled.span`
  font-size: 2.5rem;
  margin-left: auto;
`;
