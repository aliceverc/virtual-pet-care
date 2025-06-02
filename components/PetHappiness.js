export default function PetHappiness({ needs }) {
  const values = Object.values(needs);
  const averageNeed = values.reduce((sum, val) => sum + val, 0) / values.length;

  let mood = "😐";
  if (averageNeed > 70) mood = "😄";
  else if (averageNeed < 30) mood = "😢";

  return (
    <div>
      <h3>Mood</h3>
      <p style={{ fontSize: "2rem" }}>{mood}</p>
    </div>
  );
}
