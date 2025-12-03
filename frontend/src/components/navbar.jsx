export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mi Sitio</h1>
      <ul className="flex gap-6 text-lg">
        <li className="hover:text-blue-600 cursor-pointer">Inicio</li>
       <li className="hover:text-blue-600 cursor-pointer">Contacto</li> 
       <li className="hover:text-blue-600 cursor-pointer">Servicios</li>
       </ul>
    </nav>
  );
}