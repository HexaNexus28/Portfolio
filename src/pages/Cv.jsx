import Header from "../components/Header";
import Footer from "../components/Footer";

function Cv() {
  return (
    <>
      <Header />
      <section className="cv-preview p-4 sm:p-6 lg:p-8 bg-gray-900 text-white min-h-screen flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Mon CV
        </h1>

        <iframe
          src="/CV-v2.pdf"
          title="Aperçu CV"
          className="w-full max-w-4xl h-[500px] sm:h-[600px] lg:h-[700px] border-2 border-gray-700 rounded-xl shadow-lg mb-6 sm:mb-8"
        />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="/CV-v2.pdf"
            download
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <i className="fas fa-download"></i>
            Télécharger le PDF
          </a>
          <a
            href="mailto:zoglopiere20@gmail.com?subject=Contact%20depuis%20CV&body=Bonjour%20Yawo%2C"
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg sm:rounded-full font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <i className="fas fa-envelope"></i>
            Me contacter
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cv;
