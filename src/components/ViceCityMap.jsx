import React from 'react';
import './ViceCityMap.css';

const ViceCityMap = ({ onBack }) => {

    const regions = [
        {
            id: 1,
            title: 'Vice City',
            desc: 'El núcleo urbano principal. Incluye zonas masivas como Vice Beach, inspiradas directamente en las playas y el distrito financiero de Miami.',
            tag: 'ZONA URBANA'
        },
        {
            id: 2,
            title: 'Leonida Keys',
            desc: 'Inspirado en los Cayos de Florida. Una cadena de islas al sur conectadas por puentes kilométricos sobre el océano, ideal para rutas de contrabando.',
            tag: 'ZONA COSTERA'
        },
        {
            id: 3,
            title: 'Grassrivers',
            desc: 'Los densos pantanos basados en los Everglades. Territorio salvaje repleto de caimanes, lagos masivos y pequeños asentamientos rurales.',
            tag: 'PANTANOS'
        },
        {
            id: 4,
            title: 'Port Gellhorn',
            desc: 'Una zona industrial y portuaria secundaria clave en el mapa. Lugar ideal para carreras ilegales y la gestión de negocios turbios.',
            tag: 'ZONA INDUSTRIAL'
        }
    ];

    return (
        <section class="map-section">
            <button onClick={onBack} class="btn-volver">
                ← VOLVER AL MENÚ
            </button>

            <h1 class="section-title">MAPA DE LEONIDA</h1>
            <p class="section-subtitle">Explora las zonas y distritos filtrados basados en el Mapping Project</p>

            <div class="map-container">
                <div class="map-wrapper">
                    <iframe
                        class="map-frame"
                        src="https://vimap.saamexe.com/map"
                        title="GTA VI Leaked Map Project"
                        allowFullScreen
                    ></iframe>
                </div>

                <div class="regions-grid">
                    {regions.map((region) => (
                        <div key={region.id} class="region-card">
                            <div class="region-info">
                                <h3>{region.title}</h3>
                                <p>{region.desc}</p>
                                <span class="region-tag">{region.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ViceCityMap;