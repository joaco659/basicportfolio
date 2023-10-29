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

class Project {
  constructor(iconURL, title, description, githubLink, previewLink) {
    this.iconURL = iconURL;
    this.title = title;
    this.description = description;
    this.githubLink = githubLink;
    this.previewLink = previewLink;
  }

  build() {
    // const acceptedLinks = {
    //   github: <i className="fa-brands fa-github"></i>,
    // };
    /* {Object.entries(acceptedLinks).map(icon => {
            Object.entries(this.links).map(link => {
              if (icon[0] == link[0]) {
                return icon[1]
              }
            })
          })} */

    return (
      <div className="project-card">
        <div
          className="icon"
          style={{ backgroundImage: `url(${this.iconURL})` }}
        ></div>
        <h4 className="title">{this.title}</h4>
        <article className="description">
          <p>{this.description}</p>
        </article>
        <ul className="links">
          <li>
            <a href={this.githubLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const PROJECTS = [
  new Project(
    "./layered-peaks-1-dark.svg",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi tempore quos architecto pariatur non, voluptas corporis nostrum incidunt iste dignissimos eveniet aliquam, deleniti, ratione doloribus at ipsam cumque voluptatum quo.",
    "#"
  ),
  new Project(
    "./layered-peaks-1-dark.svg",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi tempore quos architecto pariatur non, voluptas corporis nostrum incidunt iste dignissimos eveniet aliquam, deleniti, ratione doloribus at ipsam cumque voluptatum quo.",
    "#"
  ),
  new Project(
    "./layered-peaks-1-dark.svg",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi tempore quos architecto pariatur non, voluptas corporis nostrum incidunt iste dignissimos eveniet aliquam, deleniti, ratione doloribus at ipsam cumque voluptatum quo.",
    "#"
  ),
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

          {PROJECTS.map((project, i) => (
            <AnimatedCard key={i}>{project.build()}</AnimatedCard>
          ))}
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
