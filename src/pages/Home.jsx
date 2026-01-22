import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Yawo Zoglo | Développeur Logiciel</title>
        <meta
          name="description"
          content="Développeur logiciel passionné, spécialisé en React, Node.js et applications web modernes. Découvrez mes projets et compétences."
        />
        <meta
          name="keywords"
          content="Yawo Zoglo, développeur, portfolio, React, Node.js, applications web, ESIEA"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Hero />

          {/* Section Expertise */}
          <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  <i className="fas fa-code text-blue-400 mr-2 sm:mr-3"></i>
                  Mon <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                  Une maîtrise complète du développement web moderne, du frontend au backend
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Frontend */}
                <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-700/30 backdrop-blur-sm">
                  <div className="text-blue-400 text-3xl sm:text-4xl mb-3 sm:mb-4">
                    <i className="fas fa-palette"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Frontend</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>React.js & Next.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>TypeScript & JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>Tailwind CSS & Styled Components</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>Responsive Design</span>
                    </li>
                  </ul>
                </div>

                {/* Backend */}
                <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-700/30 backdrop-blur-sm">
                  <div className="text-purple-400 text-3xl sm:text-4xl mb-3 sm:mb-4">
                    <i className="fas fa-server"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Backend</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>Node.js & Express</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>ASP.NET Core</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>PHP & MySQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>RESTful APIs</span>
                    </li>
                  </ul>
                </div>

                {/* Outils */}
                <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-green-700/30 backdrop-blur-sm">
                  <div className="text-green-400 text-3xl sm:text-4xl mb-3 sm:mb-4">
                    <i className="fas fa-tools"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Outils & DevOps</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>Git & GitHub</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>Docker & CI/CD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>VS Code & WebStorm</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>Agile & Scrum</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section Réalisations */}
          <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  <i className="fas fa-rocket text-purple-400 mr-2 sm:mr-3"></i>
                  Réalisations <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Marquantes</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                  Des projets concrets qui démontrent mon expertise et ma passion pour l'innovation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* API Micro-Transactions */}
                <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="h-24 sm:h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-2xl sm:text-3xl">
                      <i className="fas fa-shield-alt text-blue-400"></i>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">API Micro-Transactions</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4">Backend sécurisé pour achats in-game avec inventaire temps réel</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded">ASP.NET</span>
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded">React</span>
                    </div>
                  </div>
                </div>

                {/* Cookify */}
                <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="h-24 sm:h-32 bg-gradient-to-br from-orange-600/20 to-red-600/20 flex items-center justify-center">
                    <div className="text-2xl sm:text-3xl">
                      <i className="fas fa-utensils text-orange-400"></i>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">Cookify</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4">Platforme cuisine avec recettes, favoris et dashboard</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-orange-900/50 text-orange-300 text-xs rounded">PHP</span>
                      <span className="px-2 py-1 bg-red-900/50 text-red-300 text-xs rounded">MySQL</span>
                    </div>
                  </div>
                </div>

                {/* Portfolio */}
                <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="h-24 sm:h-32 bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-2xl sm:text-3xl">
                      <i className="fas fa-briefcase text-green-400"></i>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">Portfolio Personnel</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4">Site vitrine interactif avec React Router et animations</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded">Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>Voir tous mes projets</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Section Contact */}
          <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-gray-700">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                    <i className="fas fa-handshake text-green-400 mr-2 sm:mr-3"></i>
                    Prêt à <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Collaborer</span> ?
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-4">
                    Développeur logiciel passionné, je suis ouvert aux opportunités de stage ,d'alternance et de collaboration sur des projets innovants.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl text-blue-400 mb-2 sm:mb-3">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Email</h4>
                      <a href="mailto:zoglopiere20@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors text-sm sm:text-base">
                        Contactez-moi
                      </a>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl text-purple-400 mb-2 sm:mb-3">
                        <i className="fab fa-linkedin"></i>
                      </div>
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/yawozoglo/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 transition-colors text-sm sm:text-base">
                        Connectons-nous
                      </a>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl text-green-400 mb-2 sm:mb-3">
                        <i className="fab fa-github"></i>
                      </div>
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">GitHub</h4>
                      <a href="https://github.com/HexaNexus28" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 transition-colors text-sm sm:text-base">
                        Mon travail
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a
                      href="mailto:zoglopiere20@gmail.com"
                      className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      <i className="fas fa-paper-plane"></i>
                      Me contacter
                    </a>
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      <i className="fas fa-folder-open"></i>
                      Mes projets
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
