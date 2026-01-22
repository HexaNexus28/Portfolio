import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import user from "../data/user";

function About() {
  return (
    <>
      <Header />
      <section className="about p-4 sm:p-6 lg:p-8 bg-gray-900 text-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section Premium */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="avatar mb-4 sm:mb-6 lg:mb-8 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-36 rounded-full border-4 border-blue-500 shadow-[0_0_20px_sm:25px_rgba(59,130,246,0.7)] overflow-hidden mx-auto">
              <img
                src={user.image}
                alt={user.lastname}
                className="w-full h-full object-cover object-top scale-110 transition-transform duration-500 hover:scale-125"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              <i className="fas fa-user-circle text-blue-400 mr-2 sm:mr-3"></i>
              Yawo Zoglo
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8 text-gray-300 px-4">
              <strong>Développeur Logiciel</strong> et étudiant à l'ESIEA, je donne
              vie à des idées : transformer des lignes de code en expériences
              fluides, utiles et parfois un peu ludiques.
            </p>
          </div>

          {/* About Content Premium */}
          <div className="mt-8 sm:mt-12 lg:mt-16 space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Ma Philosophie */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-10 backdrop-blur-sm border border-blue-700/20">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                <i className="fas fa-brain text-blue-400 mr-2 sm:mr-3"></i>
                Ma Philosophie
              </h2>
              
              <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 lg:space-y-6 text-gray-300 text-sm sm:text-base lg:text-lg">
                <p>
                  Mon terrain de jeu : les <strong>applications interactives</strong>{" "}
                  et la <strong>gamification</strong>. Je m'inspire autant des{" "}
                  <strong>jeux de stratégie</strong> que des <strong>échecs</strong>,
                  pour allier créativité et réflexion analytique dans mes projets.
                </p>
                <p>
                  Mon objectif ? <strong>Coder avec impact</strong> : des solutions
                  élégantes, performantes et pensées pour l'utilisateur.
                </p>
              </div>
            </div>

            {/* Technologies Stack */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-10 backdrop-blur-sm border border-purple-700/20">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                <i className="fas fa-layer-group text-purple-400 mr-2 sm:mr-3"></i>
                Technologies que je maîtrise
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: "React.js", icon: "fab fa-react" },
                  { name: "Node.js", icon: "fab fa-node-js" },
                  { name: "PHP", icon: "fab fa-php" },
                  { name: "MySQL", icon: "fas fa-database" },
                  { name: "Tailwind CSS", icon: "fas fa-palette" },
                  { name: "C#", icon: "fab fa-windows" },
                  { name: "TypeScript", icon: "fas fa-code" },
                  { name: "Docker", icon: "fab fa-docker" },
                  { name: "ASP.NET Core", icon: "fas fa-server" },
                  { name: "Electron", icon: "fas fa-desktop" },
                  { name: "Git", icon: "fas fa-code-branch" },
                  { name: "GitHub", icon: "fab fa-github" },
                  { name: "VS Code", icon: "fas fa-code" },
                  { name: "RESTful APIs", icon: "fas fa-server" }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-3 sm:p-4 text-center transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg border border-gray-700"
                  >
                    <div className="text-2xl sm:text-3xl mb-2">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-300">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section Premium */}
            <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-10 backdrop-blur-sm border border-green-700/30">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center text-white">
                <i className="fas fa-handshake text-green-400 mr-2 sm:mr-3"></i>
                Intéressé par une collaboration ?
              </h2>
              
              <p className="text-center text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
                En tant que développeur logiciel et étudiant à l'ESIEA, je suis toujours ouvert aux nouvelles opportunités de stage ou de collaboration sur des projets innovants. N'hésitez pas à me contacter !
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl text-blue-400 mb-2 sm:mb-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Email</h4>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zoglopiere20@gmail.com&su=Contact%20depuis%20portfolio&body=Bonjour%20Yawo%2C" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors text-sm sm:text-base">
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
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zoglopiere20@gmail.com&su=Contact%20depuis%20portfolio&body=Bonjour%20Yawo%2C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  <i className="fas fa-paper-plane"></i>
                  Me contacter
                </a>
                <a
                  href="https://github.com/HexaNexus28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg sm:rounded-full font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  <i className="fab fa-github"></i>
                  Voir mon GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
