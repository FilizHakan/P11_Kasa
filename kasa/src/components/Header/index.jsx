import Logo from "../../assets/logo_header.png";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() 
{
  return (
    <header>
        <img className="header__img" src={Logo} alt="Kasa logo" />
          <ul className="header__list">
            <NavLink 
            to="/"
            className={(nav)=> (nav.isActive ? "nav-active":"") }
            >
              <li className="header__item">Accueil</li>
            </NavLink>
            <NavLink to="/about"
            className={(nav)=> (nav.isActive ? "nav-active":"")}
            >
              <li className="header__item">À propos</li>
            </NavLink>
          </ul>
    </header>
  );
}

export default Header;