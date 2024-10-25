import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-2xl text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </h1>
    </main>
  );
};

export default App;
