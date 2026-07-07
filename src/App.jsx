import React from 'react';
import MainMenu from './components/MainMenu';
import BackgroundVideo from './components/BackgroundVideo';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <BackgroundVideo />

      <div className="interface-layer">
        <MainMenu />
      </div>

      {/* Ahora flotará de forma absoluta en su esquina sin empujar nada */}
      <AudioPlayer />
    </div>
  );
}