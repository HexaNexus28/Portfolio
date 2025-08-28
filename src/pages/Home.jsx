import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="px-4 md:px-10">
          <h1 className="text-3xl font-bold text-center my-6">My Portfolio</h1>

          <section className="max-w-5xl mx-auto">
            <div className="bg-gray shadow-lg rounded-2xl p-8 text-center">
              <Hero />

              <div className="mt-8">
                <Link
                  to="/projects"
                  className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-3xl shadow hover:bg-blue-700 transition"
                >
                  Voir mes projets
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
