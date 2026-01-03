import fotoPerfil from "../assets/foto-perfil.jpg";

export default function Header() {
  return (
    <header id="home" className="section">
      <h2>Header</h2>
      <a className="apresentation" href="#home">
        Carlos Henrique Barbosa Gomes Peixoto
        <img src={fotoPerfil} alt="Foto de Perfil de Carlos Henrique" />
      </a>

      <ul className="list-navigation">
        <li>
          <a href="#hero">Hero</a>
        </li>
        <li>
          <a href="#about">Sobre Mim</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#footer">Footer</a>
        </li>
      </ul>
    </header>
  );
}
