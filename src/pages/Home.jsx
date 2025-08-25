import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import About from "./About";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1> My Portfolio </h1>
        <Hero></Hero>

        <About></About>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Home;
