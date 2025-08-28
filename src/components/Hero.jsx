import { TypeAnimation } from "react-type-animation";
import user from "../data/user";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-15 min-h-[10vh] bg-gray-800 text-white rounded-4xl shadow-xl mx-4 md:mx-20">
      <div className="avatar mb-6 w-32 h-32 rounded-full border-4 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.7)] overflow-hidden">
        <img
          src={user.image}
          alt={user.lastname}
          className="w-full h-full object-cover object-top scale-110 transition-transform duration-500 hover:scale-125"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 drop-shadow-lg">
        Salut, je suis {user.firstname} {user.lastname}
      </h1>
      <TypeAnimation
        sequence={[
          "Développeur FullStack",
          1000,
          "Je crée des solutions performantes et intuitives",
          1000,
          "FullStack Developer",
          1000,
          "Building elegant and efficient applications",
          1000,
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={120}
        repeat={Infinity}
        className="text-3xl text-green-300 drop-shadow-[0_0_8px_rgba(72,187,120,0.9)]"
      />
    </section>
  );
}

export default Hero;
