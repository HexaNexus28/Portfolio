import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-3 sm:p-4 shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Branding */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm sm:text-lg group-hover:scale-110 transition-transform">
            YZ
          </div>
          <span className="font-semibold text-base sm:text-xl hidden sm:block group-hover:text-blue-400 transition">
            Yawo Zoglo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-8">
          <Link to="/" className="hover:text-blue-400 transition-colors relative group text-sm sm:text-base">
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/projects" className="hover:text-blue-400 transition-colors relative group text-sm sm:text-base">
            Projets
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors relative group text-sm sm:text-base">
            About Me
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/cv" className="hover:text-blue-400 transition-colors relative group text-sm sm:text-base">
            CV
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <div className={`w-5 h-0.5 sm:w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-5 h-0.5 sm:w-6 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 sm:w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4 space-y-2">
          <Link 
            to="/" 
            className="block py-3 px-4 hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/projects" 
            className="block py-3 px-4 hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </Link>
          <Link 
            to="/about" 
            className="block py-3 px-4 hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </Link>
          <Link 
            to="/cv" 
            className="block py-3 px-4 hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            CV
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
