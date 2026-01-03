import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";

export default function Hero() {
  return (
    <section id="hero" className="section">
      <h2>Hero</h2>
      <h1>Carlos Gomes ―― Desenvolvedor Front-End</h1>
      <p>“React, JavaScript, UI focada em performance e clareza.”</p>
      <ul className="img-user">
        <li>
          <img src={html5} alt="" />
        </li>
        <li>
          <img src={css3} alt="" />
        </li>
        <li>
          <img src={js} alt="" />
        </li>
        <li>
          <img src={react} alt="" />
        </li>
      </ul>
      <div className="btn-navigation">
        <button>
          <a href="#projects">Ver Projetos</a>
        </button>
        <button>
          <a href="#contact">Fale Comigo</a>
        </button>
      </div>
    </section>
  );
}
