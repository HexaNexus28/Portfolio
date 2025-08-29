import projects from "../data/projects";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

function Project() {
  return (
    <>
      <Navbar />
      <section className="p-8 bg-gray-800 min-h-screen">
        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.id}
              className={`p-6 rounded-xl shadow-md transition-all duration-300
              ${
                project.comingSoon
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-900 text-gray-100 hover:bg-gray-800 hover:shadow-xl"
              }
            `}
            >
              <h3 className="text-xl font-bold mb-4 text-center text-purple-600">
                {project.title}
              </h3>

              {project.comingSoon && (
                <span className="inline-block bg-yellow-500 text-black px-2 py-1 rounded-full text-sm mb-2">
                  Bientôt disponible
                </span>
              )}
              <p className="mb-1">
                <span className="font-medium">Rôle:</span> {project.role}
              </p>
              <p className="mb-2">
                <span className="font-medium">Résumé:</span> {project.resume}
              </p>
              <div className="flex flex-wrap gap-4 mt-8 ">
                {project.technologies.map((image, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-125"
                  >
                    <img
                      src={image}
                      alt="technologies"
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {!project.comingSoon && (
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded-full
                   border border-gray-700 hover:bg-gray-700 transition-all duration-300 
                   hover:scale-105 shadow-md"
                    >
                      <i className="fab fa-github"></i>
                      Voir le code
                    </a>
                  )}

                  {project.demo && project.demo.endsWith(".mp4") ? (
                    <video
                      src={project.demo}
                      controls
                      className="w-full rounded-lg mt-4 shadow-lg"
                    />
                  ) : !project.demo ? (
                    ""
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 
                   text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 
                   transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      <i className="fas fa-globe"></i>
                      Voir en ligne
                      <i className="fas fa-external-link-alt text-sm"></i>
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
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
