import skills from '../data/skills-fixed';

function Skills() {
  const SkillCategory = ({ category, items }) => (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
        {category}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {items.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
          >
            <div className="text-2xl sm:text-3xl mb-2">{skill.icon}</div>
            <div className="text-xs sm:text-sm font-medium text-gray-300">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="skills px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">
          Mes <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Compétences</span>
        </h2>
        
        <SkillCategory 
          category="Frontend" 
          items={skills.frontend} 
        />
        <SkillCategory 
          category="Backend" 
          items={skills.backend} 
        />
        <SkillCategory 
          category="Outils & DevOps" 
          items={skills.tools} 
        />
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Passionné par l'apprentissage continu et l'exploration de nouvelles technologies
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
