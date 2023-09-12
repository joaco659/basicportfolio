import { useContext } from "react";
import anime from "animejs/lib/anime.es.js";

import ThemeContext from "../contexts/theme-context.jsx";

import "../styles/Topbar.scss";

function Topbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    const toggleBtnLogo = document.querySelector(".toggle-theme-logo");

    if (theme === "dark") {
      setTheme("light");
      anime({
        targets: toggleBtnLogo,
        translateX: -21,
        color: "#f7d231",
        class: "toggle-theme-logo fa-solid fa-sun ",
        backgroundColor: "#b8e5f1",
        easing: "easeInOutExpo",
        duration: 300,
      });
    } else {
      setTheme("dark");
      anime({
        targets: toggleBtnLogo,
        translateX: -1,
        color: "#e3e7ce",
        class: "toggle-theme-logo fa-solid fa-moon ",
        backgroundColor: "#143655",
        easing: "easeInOutExpo",
        duration: 300,
      });
    }
  }

  return (
    <header className="topbar">
      <nav>
        <button className="burger-btn">
          <i className="fa-solid fa-bars"></i>
        </button>

        <ul className="topbar__links">
          <li>
            <a href="#inicio">
              <i className="fa-solid fa-home"></i>Inicio
            </a>
          </li>
          <li>
            <a href="#experiencia">
              <i className="fa-solid fa-business-time"></i>Experiencia
            </a>
          </li>
          <li>
            <a href="#proyectos">
              <i className="fa-solid fa-laptop-code"></i>Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto">
              <i className="fa-regular fa-envelope"></i>Contacto
            </a>
          </li>
          <li>
            <a href="#cv">
              <i className="fa-regular fa-file"></i>Descargar CV
            </a>
          </li>
        </ul>
      </nav>

      <button className="toggle-theme dark" onClick={toggleTheme}>
        <i className="toggle-theme-logo fa-solid fa-moon"></i>
      </button>
    </header>
  );
}

export default Topbar;
