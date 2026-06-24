import React, { useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Ajustamos el volumen a un nivel moderado
      
      // Intenta reproducir automáticamente al iniciar el portal
      audioRef.current.play().catch((error) => {
        console.log("La reproducción automática requiere una interacción previa con la página.");
      });
    }
  }, []);

  return (
    <div className="audio-player-wrapper">
      {/* Etiqueta de audio nativa activa y enlazada con la referencia */}
      <audio 
        ref={audioRef} 
        id="bg-music" 
        src="/src/assets/disconnected.mp3" // Asegúrate de que apunte a tu asset
        loop
      />
      
      {/* Tu indicador minimalista flotante original estilo Rockstar */}
      <div className="audio-status">
        <span>🎵 SOUND TRACK: The Pointer Sisters - Hot Together (1986) </span>
      </div>
    </div>
  );
}