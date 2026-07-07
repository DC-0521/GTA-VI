import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="video-wrapper">
      {/* Usamos un div con estilo de fondo apuntando a tu fondo.png */}
      <div 
        className="placeholder-bg" 
        style={{ backgroundImage: "url('/src/assets/fondo.png')" }}
      ></div>
    </div>
  );
}