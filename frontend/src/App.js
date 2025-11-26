import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    // Petición al backend Flask
    fetch("http://127.0.0.1:5000/api/mensaje")
      .then((res) => res.json())
      .then((data) => setMensaje(data.texto))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Flask + React funcionando juntos para un sitio</h1>
      <p>{mensaje}</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="120"
        style={{ marginTop: "20px" }}
      />
    
    </div>
  );
}

export default App;