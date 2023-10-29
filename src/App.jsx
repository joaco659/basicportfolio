// import { useState } from 'react'
import "./App.scss";
import { useState } from "react";

import ThemeContext from "./contexts/theme-context.jsx";

// import anime from "animejs/lib/anime.es.js";

import Topbar from "./components/Topbar.jsx";
import AnimatedCard from "./components/AnimatedCard.jsx";

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
            // eslint-disable-next-line react/no-unknown-property
            load="lazy"
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

          <div className="message">
            <p>
              Aunque sea Junior, estoy en constante búsqueda de experiencias que
              me ayuden a desarrollar mis habilidades.
            </p>
            <i className="fa-regular fa-face-smile"></i>
          </div>
        </div>

        <div id="proyectos">
          <h3>Proyectos</h3>
          <p>
            De todos los proyectos que he hecho, destaco solo los siguientes.
          </p>

          <AnimatedCard>
            <div className="project-card">
              <div className="icon"></div>
              <h4 className="title">Prueba de tarjeta 3D</h4>
              <article className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  doloribus inventore, eum perspiciatis dicta dolor itaque amet
                  laudantium asperiores consequuntur a eligendi incidunt
                  nesciunt tenetur omnis, non recusandae debitis suscipit?
                </p>
              </article>
              <ul className="links">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedCard>
        </div>

        <footer className="credits">
          <p>
            Hecho con <i className="fa-solid fa-heart"></i> por Joaquin Medina
          </p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
