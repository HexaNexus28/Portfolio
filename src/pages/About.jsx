import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import user from "../data/user";
function About() {
  return (
    <>
      <Navbar />
      <section className="about p-8 bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
        <div className="avatar mb-6 w-32 h-32 rounded-full border-4 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.7)] overflow-hidden">
          <img
            src={user.image}
            alt={user.lastname}
            className="w-full h-full object-cover object-top scale-110 transition-transform duration-500 hover:scale-125"
          />
        </div>
        <h1 className="text-5xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Yawo Zoglo
        </h1>
        <p className="text-xl text-center max-w-3xl mb-8 text-gray-300">
          Développeur FullStack spécialisé dans la création d’applications web
          performantes et d’expériences utilisateur intuitives. Je conçois des
          solutions techniques sur mesure, des plateformes éducatives aux jeux
          web interactifs, en alliant rigueur et créativité.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {["React", "Node.js", "PHP", "MySQL", "Tailwind CSS", "C#"].map(
            (tech, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full bg-gray-800 border border-gray-700 text-purple-300 font-medium
                         hover:bg-purple-900 hover:text-white hover:border-purple-500
                         transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div className="max-w-3xl mb-12 text-center space-y-6 text-gray-300">
          <p>
            Mon approche allie <strong>innovation technique</strong> et{" "}
            <strong>design centré utilisateur</strong>. Je m’attache à optimiser
            chaque ligne de code pour des performances optimales, tout en créant
            des interfaces qui captivent.
          </p>
          <p>
            Hors des écrans,je m’inspire de jeux comme <em>Genshin Impact</em>{" "}
            pour mes projets interactifs et la gamification. Je cultive ma{" "}
            <strong>pensée stratégique</strong> à travers les échecs — une
            passion qui affine ma capacité à résoudre des problèmes complexes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:zoglopiere20@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold
                       hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <i className="far fa-envelope"></i> Me contacter
          </a>
          <a
            href="https://www.linkedin.com/in/yawozoglo/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-800 rounded-full text-white font-semibold border border-gray-700
                       hover:bg-gray-700 transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a
            href="https://github.com/HexaNexus28"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-800 rounded-full text-white font-semibold border border-gray-700
                       hover:bg-gray-700 transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
