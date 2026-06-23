# 🎮 Portal Informativo Inmersivo — GTA VI
### 🏫 Instituto Superior Universitario Almirante Illingworth (AITEC)
**Curso:** 3er Semestre — Desarrollo de Software  
**Asignatura:** Diseño Web
**Grupo:** C
**Integrantes** Daniel Carpio - Joseph Castro - Michael Peralta

---

## 📌 1. Introducción y Propósito del Sitio
Este proyecto consiste en el diseño y desarrollo de una aplicación web SPA (Single Page Application) utilizando el framework **React.js** y la herramienta de construcción **Vite**. 

El enfoque visual rompe con los esquemas de maquetación tradicionales, implementando una interfaz inmersiva inspirada en los menús de inicio de los videojuegos de *Rockstar Games*, específicamente tematizada en **Grand Theft Auto VI (GTA VI)**. El portal funciona como un sitio web informativo y de preventa real, centralizando los esfuerzos del equipo en tres módulos interactivos esenciales y eliminando simulaciones de juego no funcionales para priorizar una entrega técnica robusta, limpia y modular.

## 📦 2. Estructura de Módulos del Proyecto
La aplicación distribuye sus funcionalidades en tres secciones principales accesibles de forma dinámica desde el menú centralizado[cite: 1]:
* **Contador GTA VI y Plataformas:** Módulo matemático interactivo que calcula y despliega en tiempo real (días, horas, minutos y segundos) la cuenta regresiva para el lanzamiento oficial[cite: 1]. Incluye el apartado gráfico de consolas confirmadas (PlayStation 5 y Xbox Series X/S)[cite: 1].
* **Sección de Personajes:** Espacio modular dedicado a la renderización, descripción biográfica e interacciones narrativas de los protagonistas[cite: 1].
* **Mapa de Vice City:** Componente cartográfico dinámico que simula la distribución geoespacial de la renovada Vice City, detallando distritos y puntos de interés[cite: 1].

## 🛠️ 3. Flujo de Trabajo Colaborativo (Git & GitHub)
El flujo de trabajo se rige estrictamente por políticas de bifurcación de ramas (*feature branching*) para garantizar el desarrollo limpio en equipo[cite: 1]:

| Rama (Branch) | Módulo / Responsabilidad Técnica | Estado Base |
| :--- | :--- | :--- |
| `main` | Producción, estructura base limpia y diseño estético principal[cite: 1]. | Consolidado / Estable[cite: 1] |
| `feature/contador-plataformas` | Lógica de temporizadores en tiempo real, hooks de React (`useState`, `useEffect`) y compatibilidad de consolas[cite: 1]. | Asignado (Repo Leader)[cite: 1] |
| `feature/personajes` | Maquetación, tarjetas informativas e inserción de assets biográficos de los protagonistas[cite: 1]. | Asignado a Compañero[cite: 1] |
| `feature/mapa-vice-city` | Implementación de coordenadas e interactividad cartográfica del entorno urbano[cite: 1]. | Asignado a Compañero[cite: 1] |
## 🗂️ 4. Arquitectura del Software y Componentes React
Para garantizar la modularidad y el cumplimiento de los estándares de desarrollo limpio, la arquitectura de la aplicación se fragmenta en componentes desacoplados bajo el directorio `src/components/`:
* `src/App.jsx`: Componente raíz de la aplicación que coordina el flujo global y las capas de interfaz.
* `src/components/BackgroundVideo.jsx`: Gestiona la capa inmersiva de fondo mediante la simulación responsiva de la imagen principal (`fondo.png`) cubriendo la totalidad de la pantalla.
* `src/components/MainMenu.jsx`: Componente del menú centralizado que itera e imprime dinámicamente las opciones del equipo.
* `src/components/AudioPlayer.jsx`: Componente de reproducción multimedia aislado de forma absoluta de los flujos visuales para evitar desbordamientos del viewport.

## 🎨 5. Directrices de Diseño Visual e Interfaz de Usuario (UI/UX)
El diseño visual implementa técnicas de desarrollo web avanzado mediante hojas de estilo CSS (`src/App.css`), asegurando criterios estéticos estilo *Rockstar Games*:
1. **Contraste Inmersivo:** Uso de capas de degradado lineal oscurecido para contrarrestar la alta iluminación de la imagen de fondo y mantener la legibilidad.
2. **Efectos Neón:** Implementación de sombreados dinámicos en texto (`text-shadow`) y filtros de caída de sombra en imágenes (`drop-shadow`) emulando los espectros cromáticos característicos de Vice City.
3. **Aislamiento Absoluto:** Posicionamiento de elementos multimedia críticos en coordenadas independientes (`position: absolute;` y `z-index`) previniendo distorsiones visuales o barras de desplazamiento innecesarias (`overflow: hidden;`).