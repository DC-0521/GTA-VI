# 🎮 Portal Informativo Inmersivo — GTA VI

### 🏫 Instituto Superior Universitario Almirante Illingworth (AITEC)
**Curso:** 3er Semestre — Desarrollo de Software  
**Asignatura:** Diseño Web  
**Grupo:** C  
**Integrantes:** Daniel Carpio (Repo Leader) - Joseph Castro - Michael Peralta

---

## 📌 1. Introducción y Propósito del Sitio
Este proyecto consiste en el diseño y desarrollo de una aplicación web SPA (Single Page Application) utilizando el framework **React.js** y la herramienta de construcción **Vite**. 

El enfoque visual rompe con los esquemas de maquetación tradicionales, implementando una interfaz inmersiva inspirada en los menús de inicio de los videojuegos de *Rockstar Games*, específicamente tematizada en **Grand Theft Auto VI (GTA VI)**. El portal funciona como un sitio web informativo y de preventa real, centralizando los esfuerzos del equipo en tres módulos interactivos esenciales y eliminando simulaciones de juego no funcionales para priorizar una entrega técnica robusta, limpia y modular.

---

## 📦 2. Estructura de Módulos del Proyecto
La aplicación distribuye sus funcionalidades en tres secciones principales accesibles de forma dinámica desde el menú centralizado:
* **Contador GTA VI y Plataformas:** Módulo matemático interactivo que calcula y despliega en tiempo real (días, horas, minutos y segundos) la cuenta regresiva con fecha objetivo inamovible (19 de noviembre de 2026). Incluye el apartado gráfico de consolas confirmadas (PlayStation 5 y Xbox Series X/S).
* **Sección de Personajes:** Espacio modular dedicado a la renderización, descripción biográfica e interacciones narrativas de los protagonistas (Lucia y Jason), estructurado a través de tarjetas con layouts asimétricos.
* **Mapa de Vice City:** Módulo de cartografía interactiva de última generación que consume datos en tiempo real de la API de mapeo comunitario para proyectar la geolocalización aproximada del estado de Leonida, detallando los distritos clave y puntos de interés del filtrado del Mapping Project.

---

## 🛠️ 3. Flujo de Trabajo Colaborativo (Git & GitHub)
El flujo de trabajo se rigió estrictamente por políticas de bifurcación de ramas (*feature branching*) y consolidación controlada de módulos (*feature integration*) para garantizar el desarrollo limpio en equipo y evitar conflictos de código (*merge conflicts*):

| Rama (Branch) | Módulo / Responsabilidad Técnica | Estado Final |
| :--- | :--- | :--- |
| `main` | Producción, estructura base limpia y diseño estético principal. | Estable / Desplegado |
| `feature/contador-plataformas` | Lógica de temporizadores en tiempo real, hooks de React (`useState`, `useEffect`) y compatibilidad de consolas. | Completado (Repo Leader) |
| `feature/personajes` | Maquetación, tarjetas informativas e inserción de assets biográficos de los protagonistas. | Integrado exitosamente |
| `feature/mapa-vice-city` | Integración de Iframe interactivo externo, grid responsivo y maquetación de tarjetas regionales. | Integrado exitosamente |
| `feature/integracion-modulos` | Consolidación final de ramas, depuración de warnings de consola y acoplamiento total de navegación. | Fusionado hacia Main |

---

## 🗂️ 4. Arquitectura del Software y Componentes React
Para garantizar la modularidad y el cumplimiento de los estándares de desarrollo limpio, la arquitectura de la aplicación se fragmenta en componentes desacoplados bajo el directorio `src/components/`:

* `src/App.jsx`: Componente raíz de la aplicación que actúa como enrutador central de estado sólido. Coordina el renderizado condicional mediante operadores ternarios avanzados basados en el estado `currentSection`.
* `src/components/BackgroundVideo.jsx`: Gestiona la capa inmersiva de fondo mediante la simulación responsiva de la imagen principal (`fondo.png`) cubriendo la totalidad del viewport.
* `src/components/MainMenu.jsx`: Menú interactivo centralizado que procesa un array de opciones y emite eventos hacia el componente raíz mediante la propiedad `onSelectOption`.
* `src/components/AudioPlayer.jsx`: Módulo de reproducción multimedia en bucle aislado de forma absoluta de los flujos visuales para evitar desbordamientos del viewport. Controla el audio del soundtrack de forma asíncrona mediante referencias nativas (`useRef`) ejecutando el tema oficial *Disconnected*.
* `src/components/ViceCityMap/`: Carpeta modular que encapsula la lógica del mapa:
  * `ViceCityMap.jsx`: Componente funcional que inyecta de forma segura el mapa interactivo comunitario a través de un nodo `<iframe>` con aceleración de hardware activa y renderiza dinámicamente el grid de regiones con un mapeo de objetos (`.map()`).
  * `ViceCityMap.css`: Hoja de estilos desacoplada que controla los filtros de sombreado neón para el mapa y las animaciones de transición transaccional de las tarjetas de distritos.

---

## 🎨 5. Directrices de Diseño Visual e Interfaz de Usuario (UI/UX)
El diseño visual implementa técnicas de desarrollo web avanzado mediante hojas de estilo CSS (`src/App.css` y estilos modulares), asegurando criterios estéticos estilo *Rockstar Games*:

1. **Contraste Inmersivo:** Uso de capas de degradado lineal oscurecido para contrarrestar la alta iluminación de la imagen de fondo y mantener la legibilidad de la tipografía web.
2. **Efectos Neón y Estilo Vice City:** Implementación de sombreados dinámicos en texto (`text-shadow`) y filtros de caída de sombra en imágenes y contenedores (`box-shadow`), emulando los espectros cromáticos característicos de las luces neón (rosa #ff007f y cian #00f0ff).
3. **Aislamiento Absoluto y Scroll Limpio:** Posicionamiento de elementos multimedia críticos en coordenadas independientes (`position: absolute;` y `z-index`) previniendo distorsiones visuales. Las secciones secundarias, incluyendo el mapa y las tarjetas de las regiones, adoptan un control de desbordamiento controlado (`overflow-y: auto; maxHeight: 90vh;`) para asegurar una navegación fluida en resoluciones de pantalla estándar de laptops y monitores de escritorio.
4. **Interactividad Dinámica:** Las tarjetas de región del mapa y las de personajes incluyen transiciones CSS (`transition: transform 0.3s ease`) que responden al evento `:hover` elevándose en el eje Y y mutando su resplandor periférico de cian a rosa neón como feedback visual inmediato para el usuario.