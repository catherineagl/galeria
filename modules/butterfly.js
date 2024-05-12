import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const loadButterfly = (scene, camera, renderer) => {
  const loader = new GLTFLoader();
  loader.load("../public/models/butterfly/scene.gltf", (gltf) => {
    const butterfly = gltf.scene;
    scene.add(butterfly);

    // Configurar la posición inicial de la mariposa
    const butterflyPosition = new THREE.Vector3(0, 0, 0);
    butterfly.position.copy(butterflyPosition);

    // Ajustar la cámara para que siga a la mariposa
    camera.position.z = 5;
    camera.lookAt(butterfly.position);

    // Animación de la mariposa
    function animateButterfly() {
      requestAnimationFrame(animateButterfly);

      // Aquí puedes añadir la lógica de movimiento de la mariposa, por ejemplo:
      butterflyPosition.x += Math.sin(Date.now() * 0.001);
      butterflyPosition.y += Math.cos(Date.now() * 0.001);
      butterflyPosition.z += Math.sin(Date.now() * 0.001);
      butterfly.position.copy(butterflyPosition);

      renderer.render(scene, camera);
    }

    animateButterfly();
  });
};
