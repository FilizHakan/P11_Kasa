import logo from "../../assets/logo_header.png";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <img className="header__img" src={logo} alt="Kasa logo" />
      <nav>
        <ul className="header__list">
          <Link to="/P11_Kasa">
            <li className="header__item">Accueil</li>
          </Link>
          <Link to="/P11_Kasa/a_propos">
            <li className="header__item">À propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;