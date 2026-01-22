import projects from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Project() {
  return (
    <>
      <Helmet>
        <title>Yawo Zoglo | Projets</title>
        <meta
          name="description"
          content="Découvrez les projets de Yawo Zoglo, développeur fullstack passionné par React, Node.js et technologies web."
        />
        <meta
          name="keywords"
          content="Yawo Zoglo, projets, portfolio, développeur, React, Node.js, applications web"
        />
      </Helmet>

      <Header />
      <section className="p-4 sm:p-6 lg:p-8 bg-gray-800 min-h-screen">
        {/* Header Premium */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Mes <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projets</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              {projects.length} projet{projects.length > 1 ? 's' : ''} concrets • {projects.filter(p => !p.comingSoon).length} en production
            </p>
          </div>
        </div>

        {/* CTA Premium */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🚀 Explorez mon travail
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Chaque projet représente un défi technique et une opportunité d'innovation. 
              Du backend sécurisé aux interfaces modernes, découvrez ma vision du développement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/HexaNexus28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-700 text-white rounded-full border border-gray-600 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <i className="fab fa-github"></i>
                Voir tous mes projets
              </a>
              <a
                href="mailto:zoglopiere20@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                <i className="far fa-envelope"></i>
                Discutons de vos projets
              </a>
            </div>
          </div>
        </div>

        {/* Grille Premium */}
        <div className="mt-12 sm:mt-16">
          <ul className="grid gap-8 sm:gap-10 grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project) => (
            <li
              key={project.id}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              {/* Header visuel amélioré */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Contenu Premium */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    <span className="font-medium text-gray-300">Rôle:</span> {project.role}
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.resume}
                  </p>
                </div>

                {/* Technologies Premium */}
                <div className="mb-8">
                  <p className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">
                    Stack Technique
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 bg-gray-800 p-2 group-hover:bg-gray-700"
                        title="Technologie"
                      >
                        <img
                          src={tech}
                          alt="technologie"
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Premium */}
                <div className="flex gap-4 justify-between items-center">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm font-medium"
                        title="Voir le code source"
                      >
                        <i className="fab fa-github"></i>
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-sm font-medium"
                        title="Voir la démo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span className="hidden sm:inline">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        

        {/* Footer CTA Premium */}
        <div className="max-w-6xl mx-auto mt-20 sm:mt-24 text-center">
          <div className="bg-gradient-to-r from-green-900/50 via-blue-900/50 to-purple-900/50 rounded-3xl p-8 sm:p-12 backdrop-blur-sm border border-gray-700">
            <div className="text-center mb-8">
              <div className="text-5xl text-green-400 mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Prêt à créer</span> l'exceptionnel ?
              </h3>
              <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
                Chaque projet commence par une conversation. Transformons vos idées en solutions innovantes 
                qui marqueront vos utilisateurs et feront la différence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-4xl text-blue-400 mb-3">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Innovation</h4>
                  <p className="text-gray-400 text-sm">
                    Des solutions créatives et modernes
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-purple-400 mb-3">
                    <i className="fas fa-code"></i>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Expertise</h4>
                  <p className="text-gray-400 text-sm">
                    Code propre, performant et maintenable
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-green-400 mb-3">
                    <i className="fas fa-users"></i>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Collaboration</h4>
                  <p className="text-gray-400 text-sm">
                    Une communication transparente et efficace
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="mailto:zoglopiere20@gmail.com?subject=Projet%20de%20collaboration&body=Bonjour%20Yawo%2C%0A%0AJe%20souhaite%20discuter%20d'un%20projet%20de%20collaboration.%0A%0APouvez-vous%20me%20donner%20vos%20disponibilit%C3%A9s%20pour%20un%20appel%20cette%20semaine%20%3F%0A%0ACordialement%2C"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <i className="fas fa-paper-plane"></i>
                  Contactez-moi par email
                </a>
              </div>
              
              <p className="text-gray-400 text-sm">
                <i className="fas fa-clock mr-2"></i>
                Réponse garantie sous 24h • Disponible pour un appel cette semaine
              </p>
            </div>
          </div>
        </div>
        </div>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </section>
      <Footer />
    </>
  );
}

export default Project;
