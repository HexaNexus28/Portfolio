function WhyMe() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-gray-800/80 border-b border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Pourquoi <span className="text-blue-400">moi</span> pour votre équipe ?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Mon profil est conçu pour être directement opérationnel et apporter une forte valeur ajoutée à vos projets de développement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-colors shadow-lg">
            <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-briefcase text-2xl text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Compréhension business</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Je ne code pas juste pour coder. J'analyse le besoin utilisateur, les contraintes métiers et les enjeux produits avant chaque ligne de code.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-colors shadow-lg">
            <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-rocket text-2xl text-purple-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Autonomie</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Capable de m'approprier un projet legacy ou from scratch (conception de la BD, architecture API, implémentation front) sans nécessiter de micro-management.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-colors shadow-lg">
            <div className="w-14 h-14 bg-green-900/50 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-server text-2xl text-green-400"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Déploiement réel</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sensible à la performance et la qualité. Je déploie, mets en place l'intégration continue, gère les bases de données et optimise les requêtes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyMe;
