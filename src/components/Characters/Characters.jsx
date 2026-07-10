import React from 'react';
import './Characters.css';
import luciaImg from '../../assets/Lucia.jpg'; 
import jasonImg from '../../assets/Jason.jpg';

const characterData = [
  {
    id: 1,
    name: "Lucia",
    description: "La primera protagonista femenina de la saga desde una perspectiva moderna. Dinámica, decidida y con un pasado complicado en las calles de Vice City.",
    image: luciaImg
  },
  {
    id: 2,
    name: "Jason",
    description: "El co-protagonista que comparte el vínculo criminal con Lucia. Un personaje enfocado en la acción y la supervivencia en el submundo de Leonida.",
    image: jasonImg
  }
];

export default function Characters() {
  return (
    <section className="characters-section">
      <h2 className="section-title">PROTAGONISTAS</h2>
      <div className="characters-container">
        {characterData.map((char) => (
          <div key={char.id} className="character-card">
            <div className="card-image-wrapper">
              <img src={char.image} alt={char.name} className="character-image" />
            </div>
            <div className="card-info">
              <h3>{char.name}</h3>
              <p>{char.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}