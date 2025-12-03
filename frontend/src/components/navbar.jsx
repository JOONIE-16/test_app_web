import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Mi Sitio</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/formulario">Formulario</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}