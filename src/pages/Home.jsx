import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyMe from "../components/WhyMe";
import SkillsGrid from "../components/SkillsGrid";
import ContactCTA from "../components/ContactCTA";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Yawo Zoglo | Développeur Logiciel</title>
        <meta
          name="description"
          content="Développeur logiciel orienté produit (C#, React, Fullstack). Découvrez comment je conçois et déploie des applications web en conditions réelles."
        />
        <meta
          name="keywords"
          content="Développeur logiciel, C#, ASP.NET Core, React, Fullstack, Alternance, Yawo Zoglo, DevOps, CI/CD"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-900 font-sans">
        <Header />
        <main>
          <Hero />

          <WhyMe />

          <SkillsGrid />

          {/* Section Réalisations (Aperçu) */}
          <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-gray-800/50 border-t border-gray-700">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Découvrez mes solutions en action
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                De la conception d'API sécurisées à l'interface réactive, j'applique les bonnes pratiques pour des applications de bout-en-bout.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <i className="fas fa-folder-open"></i>
                <span>Voir mes études de cas (Projets)</span>
              </Link>
            </div>
          </section>

          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
