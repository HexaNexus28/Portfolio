import { useState, useEffect } from 'react';
import user from "../data/user";

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const sequences = [
    "Développeur Logiciel",
    "Je crée des solutions performantes et intuitives", 
    "Software Engineer",
    "Building elegant and efficient applications"
  ];

  useEffect(() => {
    const currentText = sequences[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % sequences.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="flex flex-col items-center justify-center text-center py-8 sm:py-12 lg:py-16 min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl mx-2 sm:mx-4 md:mx-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-24 sm:w-40 h-24 sm:h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-4 sm:px-6">
        <div className="avatar mb-6 sm:mb-8 w-24 h-24 sm:w-32 sm:h-36 lg:w-36 lg:h-36 rounded-full border-4 border-blue-500 shadow-[0_0_20px_sm:30px_rgba(59,130,246,0.8)] overflow-hidden mx-auto">
          <img
            src={user.image}
            alt={user.lastname}
            className="w-full h-full object-cover object-top scale-110 transition-transform duration-700 hover:scale-125"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
          Bonjour, je suis <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {user.firstname} {user.lastname}
          </span>
        </h1>
        
        <div className="mb-6 sm:mb-8">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-300 drop-shadow-[0_0_8px_sm:10px_rgba(72,187,120,0.9)]">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/yawozoglo/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
          >
            <i className="fab fa-linkedin-in"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/HexaNexus28"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white rounded-full font-semibold border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
