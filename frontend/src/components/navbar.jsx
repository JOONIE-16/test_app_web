import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/formulario">Formulario</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}