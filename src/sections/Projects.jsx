import { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1; // permer de revenir au dernier projet si on clique sur précedent alors qu'on est sur le premier projet
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1; // pareil dans le cas ou on est sur le dernier projet et qu'on fait aller au suivant, on revient au premier
      }
    });
  };
  return (
    <section className="c-space my-20">
      <p className="head-text">Mes Projets</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            {/* target=_blank + rel=noreferr s'assure que la page s'ouvre dans un nouvel onglet */}
            <a
              href={currentProject.href}
              className="flex items-center gap-2 cursor-pointer text-white-600"
              target="_blank"
              rel="noreferrer"
            >
              <p>Faire un tour sur le site</p>{" "}
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />

            {/* Suspense permet d'afficher qqch pendant le chargement du modèle 3D */}
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={2}
                  position={[-0.2, -2, 0]}
                  rotation={[0, -0.1, 0]}
                >
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
