import React from 'react';

export default function MainMenu() {
  const menuOptions = [
    'INICIAR JUEGO',
    'MODO ONLINE',
    'CONFIGURACIÓN',
    'CRÉDITOS',
    'SALIR'
  ];

  return (
    <div className="menu-content">
      {/* Contenedor del Logo Principal */}
      <div className="logo-container">
        {/* Jalamos tu vi.png directamente desde assets */}
        <img src="/src/assets/vi.png" alt="GTA VI Logo" className="gta-logo" />
        <h1 className="gta-subtitle">VICE CITY</h1>
      </div>

      {/* Lista interactiva de opciones */}
      <ul className="options-list">
        {menuOptions.map((option, index) => (
          <li key={index} className="menu-item">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}