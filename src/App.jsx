import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import BackgroundVideo from './components/BackgroundVideo';
import AudioPlayer from './components/AudioPlayer';
// Importamos el componente de tu compañero de forma aislada
import Characters from './components/Characters/Characters'; 
import Contador from './components/Contador/Contador'; // <--- Importamos tu nuevo componente de contador
import './App.css';

export default function App() {
  // Estado para controlar qué renderizar dentro de la 'interface-layer'
  const [currentSection, setCurrentSection] = useState('menu');

  return (
    <div className="app-container">
      {/* Tu fondo se queda intacto y fijo por detrás */}
      <BackgroundVideo />

      <div className="interface-layer">
        {/* Renderizado condicional basado en lo que el usuario seleccione */}
        {currentSection === 'menu' ? (
          // Le pasamos la función al menú para escuchar los clics
          <MainMenu onSelectOption={(option) => setCurrentSection(option)} />
        ) : (
          /* Contenedor adaptado para mostrar el trabajo correspondiente */
          <div className="section-view-container" style={{ width: '100%', textAlign: 'center', overflowY: 'auto', maxHeight: '90vh' }}>
            {/* Botón de regreso con estética Rockstar */}
            <button 
              onClick={() => setCurrentSection('menu')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#a8265e',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginBottom: '30px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                boxShadow: '0 0 10px #ff007f'
              }}
            >
              ← Volver al Menú
            </button>
            
            {/* Si es PERSONAJES, se inyecta su trabajo aquí sin interferir con tu menú */}
            {currentSection === 'PERSONAJES' && <Characters />}

            {/* Si es CONTADOR GTA VI, se inyecta tu lógica matemática aquí */}
            {currentSection === 'CONTADOR GTA VI' && <Contador />}
          </div>
        )}
      </div>

      {/* Tu reproductor sigue flotando en su esquina sin empujar nada */}
      <AudioPlayer />
    </div>
  );
}