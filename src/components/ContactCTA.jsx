function ContactCTA() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Prêt à intégrer un profil <span className="text-blue-400">opérationnel</span> ?
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Je suis à la recherche d'une <strong className="text-white">alternance en développement logiciel</strong> 
          (C#, Backend, Fullstack). Discutons de vos besoins techniques.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:zoglopiere20@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl"
          >
            <i className="fas fa-paper-plane"></i>
            Me contacter par Email
          </a>
          <a
            href="https://www.linkedin.com/in/yawozoglo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white border border-gray-600 rounded-lg font-bold text-lg hover:bg-gray-700 transition-all duration-300 shadow"
          >
            <i className="fab fa-linkedin"></i>
            Mon profil LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
