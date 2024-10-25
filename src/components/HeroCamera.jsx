import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

// Composant permettant de faire tourner le modèle 3D de l'ordinateur
const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  // animation pour les téléphones
  useFrame((state, delta) => {
    // permet de fluidifier l'animation de l'ordinateur
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // animation pour les ordis
    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.2}>
      {children}
    </group>
  );
};

export default HeroCamera;
