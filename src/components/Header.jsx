import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Accueil', icon: 'fas fa-home' },
    { path: '/about', label: 'À propos', icon: 'fas fa-user' },
    { path: '/projects', label: 'Projets', icon: 'fas fa-folder-open' },
    { path: '/cv', label: 'CV', icon: 'fas fa-file-alt' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header Desktop */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-lg sm:text-xl">YZ</span>
              </div>
              <span className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-gray-900'
              } group-hover:text-blue-400`}>
                Yawo Zoglo
              </span>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : isScrolled
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                  }`}
                >
                  <i className={`${item.icon} text-sm`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Boutons Header */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://github.com/HexaNexus28"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
                title="GitHub"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yawozoglo/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a
                href="mailto:zoglopiere20@gmail.com"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact
              </a>
            </div>

            {/* Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              }`}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'bg-gray-900/95 backdrop-blur-md opacity-100 visible' 
          : 'bg-transparent opacity-0 invisible'
      }`}>
        <div className="flex flex-col h-full p-6 pt-24">
          <nav className="flex-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-lg mb-2 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <i className={`${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          
          <div className="border-t border-gray-700 pt-6">
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/HexaNexus28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                title="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yawozoglo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="mailto:zoglopiere20@gmail.com"
                className="px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-all duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer pour éviter que le contenu soit caché sous le header fixe */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}

export default Header;
