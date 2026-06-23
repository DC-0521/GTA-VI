import React from 'react';

export default function AudioPlayer() {
  return (
    <div className="audio-player-wrapper">
      {/* Etiqueta de audio nativa. Cuando tengas tu música, la pones en public/gta-theme.mp3 y descomentas las propiedades */}
      <audio id="bg-music" loop>
        {/* <source src="/gta-theme.mp3" type="audio/mpeg" /> */}
      </audio>
      
      {/* Un indicador minimalista flotante en una esquina, estilo Rockstar */}
      <div className="audio-status">
        <span>🎵 SOUND TRACK: DISCONNECTED</span>
      </div>
    </div>
  );
}