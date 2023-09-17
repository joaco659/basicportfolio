// import { useState } from 'react'
import "./App.scss";
import { useState } from "react";

import ThemeContext from "./contexts/theme-context.jsx";

// import anime from "animejs/lib/anime.es.js";

import Topbar from "./components/Topbar.jsx";

const TECHNOLOGIES = [
  "Tailwind",
  "HTML5",
  "Git",
  "Github",
  "Python",
  "SASS",
  "Node.js",
  "JavaScript",
  "React.js",
];

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-controller theme-${theme}`}>
        <Topbar />
        <div className="mountain-bg">
          <img
            src={`./layered-peaks-1-${theme}.svg`}
            alt="Montañas con un cielo azul claro de fondo"
          />
          <div id="inicio">
            <div className="presentation">
              <h3>Hola! soy</h3>
              <h2>Joaquín Medina</h2>
              <ul className="titles">
                <li>Desarollador front-end</li>
                <li>Diseñador UX/UI</li>
              </ul>
            </div>
            <div className="technologies">
              {TECHNOLOGIES.map((skill, index) => (
                <div className="technologies__skill" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          className="transition-peak"
          src={`./layered-peaks-2-${theme}.svg`}
          alt="Capa de musgo que cae hacia abajo"
        />
        <div id="experiencia">
          <h3>Experiencia</h3>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
