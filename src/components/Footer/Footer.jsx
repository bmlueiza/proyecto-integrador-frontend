import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_section">
          <h4>Contacto</h4>
          <p>Email: contacto@minga.com</p>
          <p>Teléfono: +56 9 1234 5678</p>
          <p>Dirección: Av. Yano Quieromas 666, Santiago, Chile</p>
        </div>
        <div className="footer_section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>
              <a href="/sobre-nosotros">Sobre Nosotros</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/terminos">Términos y Condiciones</a>
            </li>
            <li>
              <a href="/privacidad">Política de Privacidad</a>
            </li>
          </ul>
        </div>
        <div className="footer_section">
          <h4>Síguenos</h4>
          <div className="social_icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; 2024 Minga. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
