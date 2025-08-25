import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-center gap-6">
        <Link to="/" className="hover:text-blue-400 transition">
          Accueil
        </Link>
        <Link to="/projects" className="hover:text-blue-400 transition">
          Projets
        </Link>
        <Link to="/about" className="hover:text-blue-400 transition">
          About
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
