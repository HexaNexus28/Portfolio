import { Link } from "react-router-dom";
import user from "../data/user";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gray-100">
      <div className="avatar mb-4">
        <img
          src={user.image}
          alt={user.lastname}
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          width={300}
          height={400}
        />
      </div>
      <h1 className="text-3xl font-bold">Salut, je suis {user.firstname}</h1>
      <p className="text-lg text-gray-600 mt-2">Dev FullStack</p>
      <Link
        to="/projects"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Voir mes projets
      </Link>
    </section>
  );
}
export default Hero;
