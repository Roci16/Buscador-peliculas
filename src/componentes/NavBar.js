import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../style/_navBar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="home">
          <Link to="/">
            <AiFillHome className="home" aria-label="Página principal" />
          </Link>
        </li>
        <li className="botones-nav">
          <Link to="/populares">Populares</Link>
        </li>
        <li className="botones-nav">
          <Link to="/estrenos">Estrenos</Link>
        </li>
        <li className="botones-nav">
          <Link to="/buscar">Buscar</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
