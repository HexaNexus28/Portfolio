import { Link } from 'react-router-dom';
import user from "../data/user";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-12 sm:py-16 lg:py-24 min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl mx-2 sm:mx-4 md:mx-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="avatar mb-6 sm:mb-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] overflow-hidden mx-auto">
          <img
            src={user.image}
            alt={user.lastname}
            className="w-full h-full object-cover object-top scale-110 transition-transform duration-700 hover:scale-110"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-lg">
          Développeur logiciel <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            orienté produit
          </span>
        </h1>
        
        <div className="mb-8 sm:mb-10 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
            Conception et déploiement d’applications web utilisées en conditions réelles
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-4">
          <Link
            to="/projects"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 w-full sm:w-auto transform hover:-translate-y-1"
          >
            <i className="fas fa-folder-open"></i>
            Voir mes projets
          </Link>
          <a
            href="https://www.linkedin.com/in/yawozoglo/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 text-white rounded-lg font-semibold border border-gray-600 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
          >
            <i className="fab fa-linkedin"></i>
            Profil LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
