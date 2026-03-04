import projects from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Project() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Yawo Zoglo | Développeur Logiciel (C#, React)</title>
        <meta
          name="description"
          content="Découvrez les études de cas de Yawo Zoglo. Applications web complètes, conception backend (C#, Node), frontend (React) et impact métier."
        />
        <meta
          name="keywords"
          content="Yawo Zoglo, projets, études de cas, développeur logiciel, C#, ASP.NET Core, React, Fullstack, backend"
        />
      </Helmet>

      <Header />
      <section className="p-4 sm:p-6 lg:p-8 bg-gray-800 min-h-screen">
        {/* Header Premium */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 pt-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Études de <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Cas Projets</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              Focus sur l'architecture, la stack technique et la valeur délivrée
            </p>
          </div>
        </div>

        {/* CTA Premium */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700 mb-12 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🚀 Explorez mes solutions techniques
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Chaque projet détaillé ici répond à une problématique métier précise par une architecture fiable et un code scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/HexaNexus28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-700 text-white rounded-full border border-gray-600 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow"
              >
                <i className="fab fa-github"></i>
                Voir sur GitHub
              </a>
              <a
                href="mailto:zoglopiere20@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow hover:shadow-lg transform hover:scale-105"
              >
                <i className="far fa-envelope"></i>
                Contact métier
              </a>
            </div>
          </div>
        </div>

        {/* Grille Premium B2B - Études de cas */}
        <div className="mt-12 sm:mt-16">
          <ul className="grid gap-10 grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group"
            >
              {/* Contenu de la carte */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-blue-400 text-sm font-semibold mb-6">
                    {project.role}
                  </p>

                  <div className="space-y-5">
                    {project.problem && (
                      <div>
                        <h4 className="text-gray-300 text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                          <i className="fas fa-exclamation-circle text-orange-400"></i> Problème
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    
                    {project.solution && (
                      <div>
                        <h4 className="text-gray-300 text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                          <i className="fas fa-lightbulb text-yellow-400"></i> Solution développée
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    )}

                    {project.impact && (
                      <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700">
                        <h4 className="text-gray-100 text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                          <i className="fas fa-chart-line text-green-400"></i> Impact
                        </h4>
                        <p className="text-gray-300 text-sm font-medium leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-800">
                  <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
                    Stack Technique
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-800 p-2 border border-gray-700 hover:border-blue-500/30 transition-colors flex justify-center items-center"
                        title="Technologie"
                      >
                        <img
                          src={tech}
                          alt="technologie stack"
                          loading="lazy"
                          decoding="async"
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-600 hover:bg-gray-700 transition-all text-sm font-semibold"
                      >
                        <i className="fab fa-github"></i>
                        Code source
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-semibold shadow-md"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Voir la démo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        <div className="max-w-6xl mx-auto mt-20 sm:mt-24 mb-10 text-center">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 border border-blue-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Vous recherchez une compétence technique fiable ?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Je suis disponible pour un <strong className="text-gray-200">contrat d'alternance</strong> afin de contribuer activement à vos développements (architecture, clean code, déploiement).
              </p>
              
              <a
                href="mailto:zoglopiere20@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl"
              >
                <i className="fas fa-paper-plane"></i>
                Organiser un entretien technique
              </a>
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
