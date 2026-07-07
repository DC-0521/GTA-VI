import React, { useState, lazy, Suspense } from 'react';

const ViceCityMap = lazy(() =>
  import('./ViceCityMap').catch(() => ({
    default: ({ onBack }) => (
      <div style={{ color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h3>[Mapa de Vice City]</h3>
        <button
          onClick={onBack}
          style={{ padding: '8px 16px', background: '#e91e63', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
        >
          Volver
        </button>
      </div>
    )
  }))
);

export default function MainMenu() {
  const [showMap, setShowMap] = useState(false);

  const menuOptions = [
    'INICIAR JUEGO',
    'MODO ONLINE',
    'MAPA VICECITY',
    'CONFIGURACIÓN',
    'CRÉDITOS',
    'SALIR'
  ];

  if (showMap) {
    return (
      <Suspense fallback={<div style={{ color: 'white', padding: '20px', textAlign: 'center' }}>Cargando...</div>}>
        <ViceCityMap onBack={() => setShowMap(false)} />
      </Suspense>
    );
  }

  return (
    <div className="menu-content">
      <div className="logo-container">
        <img src="/src/assets/vi.png" alt="GTA VI Logo" className="gta-logo" />
        <h1 className="gta-subtitle">VICE CITY</h1>
      </div>

      <ul className="options-list">
        {menuOptions.map((option, index) => (
          <li
            key={index}
            className="menu-item"
            onClick={() => {
              if (option === 'MAPA VICECITY') {
                setShowMap(true);
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}