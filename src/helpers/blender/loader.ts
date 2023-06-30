import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLTFModel = (fileName: string) => new Promise((resolve, reject) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    `models/gltf/${fileName}`,
    (gltf) => resolve(gltf),
    (error) => reject(error),
  );
});

export default 0;
