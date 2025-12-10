import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Galeria from "./pages/Galeria";
import Videos from "./pages/Videos";
import Formulario from "./pages/Formulario";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}
