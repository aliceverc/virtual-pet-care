
export default function HomePage() {
  const mockNews = [
    'Tier Bär hat Hunger',
    'Tier Hund will spielen',
    'Tier Drache hat Tier Essen bekommen'
  ];

  const mockPets = [
    { id: 1, name: 'Bär', needs: ['red', 'green', 'orange'] },
    { id: 2, name: 'Hund', needs: ['red', 'orange'] },
    { id: 3, name: 'Drache', needs: ['green', 'orange'] },
  ];

  return (
    <div className="container">
      <h1 className="logo">LOGO</h1>

      <div className="newsBanner">
        {mockNews.join(' | ')}
      </div>

      <div className="greetingSection">
        <div className="textContent">
          <h2 className="greeting">Hallo ***</h2>
          <p>
            Schön, dass du wieder da bist!<br />
            Deine Pets warten schon auf dich<br /><br />
            Was willst du heute machen?
          </p>
        </div>
        <div className="imagePlaceholder">Bild</div>
      </div>

      <div className="buttonGroup">
        <button className="btn blue">Deine Pets</button>
        <button className="btn pink">Neues Pet</button>
      </div>

      <div className="cardGrid">
        {mockPets.map((pet) => (
          <div key={pet.id} className="card">
            <div className="avatar" />
            <div className="petName">{pet.name}</div>
            <div>
              {pet.needs.map((color, idx) => (
                <div
                  key={idx}
                  className="needBar"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
