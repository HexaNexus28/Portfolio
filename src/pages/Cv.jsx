import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cv() {
  return (
    <>
      <Navbar />
      <section className="cv-preview p-8 bg-gray-900 text-white min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Mon CV
        </h1>

        <iframe
          src="/cv_2.pdf"
          title="Aperçu CV"
          className="w-full max-w-4xl h-[600px] border-2 border-gray-700 rounded-xl shadow-lg mb-8"
        />

        <a
          href="/cv_2.pdf"
          download="CV_Yawo_Zoglo.pdf"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold
               hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105
               shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          Télécharger mon CV
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Cv;
