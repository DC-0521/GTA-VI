import React from 'react';

export default function MainMenu({ onSelectOption }) {
  // Las tres opciones oficiales de tu equipo coordinado
  const menuOptions = [
    'CONTADOR GTA VI',
    'PERSONAJES',
    'MAPA DE VICE CITY' // <--- Mapeado perfectamente con el estado central
  ];

  return (
    <div className="menu-content">
      {/* Contenedor del Logo Principal */}
      <div className="logo-container">
        {/* Tu nuevo logo espectacular */}
        <img src="/src/assets/vc6.png" alt="GTA VI Logo" className="gta-logo" />
        {/* Actualizamos el texto a VICE CITY BABY con una nueva clase para controlar su espacio */}
        <h1 className="gta-subtitle-baby">VICE CITY BABY</h1>
      </div>

      {/* Lista interactiva de opciones */}
      <ul className="options-list">
        {menuOptions.map((option, index) => (
          <li 
            key={index} 
            className="menu-item"
            onClick={() => onSelectOption && onSelectOption(option)} // <--- Aquí se activa el enlace al hacer clic
            style={{ cursor: 'pointer' }} // Añade feedback visual de click
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}