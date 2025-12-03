import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
function App() {
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje));
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">React + Flask</h2>
        <p className="text-gray-700">
          Mensaje desde el backend: <strong>{mensaje}</strong>
        </p>
      </main>
    </div>
  );
}
export default App;