function SkillsGrid() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            <i className="fas fa-code text-blue-400 mr-3"></i>
            Stack <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Technique</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies maîtrisées pour le développement scalable, maintenable et sécurisé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-blue-900/40 to-gray-800 rounded-2xl p-6 border border-blue-900">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
              <i className="fas fa-server text-blue-400 text-xl"></i>
              <h3 className="text-lg font-bold text-white">Backend</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span> C#, ASP.NET Core</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span> API REST</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Node.js</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span> PHP, Laravel</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-gray-800 rounded-2xl p-6 border border-indigo-900">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
              <i className="fas fa-laptop-code text-indigo-400 text-xl"></i>
              <h3 className="text-lg font-bold text-white">Frontend</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> React.js</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> TypeScript</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-gray-800 rounded-2xl p-6 border border-green-900">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
              <i className="fas fa-database text-green-400 text-xl"></i>
              <h3 className="text-lg font-bold text-white">Bases de données</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500"></span> SQL Server</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500"></span> PostgreSQL</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500"></span> MySQL</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-gray-800 rounded-2xl p-6 border border-orange-900">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
              <i className="fas fa-tools text-orange-400 text-xl"></i>
              <h3 className="text-lg font-bold text-white">DevOps & Outils</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Git, GitHub</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-500"></span> CI / CD</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Déploiement cloud</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsGrid;
