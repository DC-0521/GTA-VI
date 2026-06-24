import React, { useState, useEffect } from 'react';
import './Contador.css';

export default function Contador() {
// Actualizado con la fecha de lanzamiento mundial oficial
const targetDate = new Date('November 19, 2026 00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">CUENTA REGRESIVA</h2>
      
      {/* Bloques del temporizador */}
      <div className="timer-grid">
        <div className="timer-box">
          <span className="timer-number">{timeLeft.days}</span>
          <span className="timer-label">DÍAS</span>
        </div>
        <div className="timer-box">
          <span className="timer-number">{timeLeft.hours}</span>
          <span className="timer-label">HORAS</span>
        </div>
        <div className="timer-box">
          <span className="timer-number">{timeLeft.minutes}</span>
          <span className="timer-label">MIN</span>
        </div>
        <div className="timer-box">
          <span className="timer-number">{timeLeft.seconds}</span>
          <span className="timer-label">SEG</span>
        </div>
      </div>

      {/* Apartado de Plataformas Confirmadas */}
      <div className="platforms-section">
        <h3 className="platforms-title">PLATAFORMAS CONFIRMADAS</h3>
        <div className="platforms-flex">
          <div className="platform-card ps5">PLAYSTATION 5</div>
          <div className="platform-card xbox">XBOX SERIES X/S</div>
        </div>
      </div>
    </div>
  );
}