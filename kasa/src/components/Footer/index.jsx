import logo_footer from "../../assets/logo_footer.png";
import "./footer.css";

// Create Footer for each page (desktop and mobile)

function Footer() {
  return (
    <footer>
      <img className="footer__img" src={logo_footer} alt="Kasa logo in the footer" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;