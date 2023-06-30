// @ts-nocheck
/* eslint-disable */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { AnimationMixer, CatmullRomCurve3, CubicBezierCurve3, Mesh, SplineCurve, Vector3 } from 'three';
import Position from '../../helpers/draw/position';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { easeInQuad, timeToPercent, verticalWaveFunction } from '../../helpers/draw';
import AnimationClock from '../../helpers/draw/animationClock';

const Glasses = (props) => {
  const meshRef = useRef<Mesh>();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const glasses = useLoader(GLTFLoader, '/models/gltf/glasses_animation.gltf');
  useEffect(() => {
    glasses.scene.scale.multiplyScalar(.05)
    glasses.scene.rotateX(Math.PI * -.5)
    glasses.scene.rotateY(Math.PI);
    glasses.scene.rotateZ(Math.PI)
  }, [glasses]);
  const mixer = useMemo(() => {
    const mixer = new AnimationMixer(glasses.scene);
    console.log(glasses.animations)
    
    return mixer;
  }, [glasses]);
  const glassesRotationAnimationClock = useMemo(() => {
    return new AnimationClock();
  }, [])

  console.log({gltf: glasses})
  useFrame((state, delta) => {
    if (glasses) {
      console.log({mixer})
      glasses.animations.forEach(clip => {
        const action = mixer.clipAction(clip)
        action.repetitions = 1;
        if (hovered) {
          action.timeScale = 1;
        } else {
          action.timeScale = -1;
        }
        const isRunning = action.isRunning();
        if (!isRunning) {
          action.reset();
        }
        action.play();
      });
    }
      mixer?.update(delta);
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group>
      <primitive
        object={glasses.scene}
        onPointerOver={() => setHover(true)} 
        onPointerOut={() => setHover(false)}
        // scale={hovered ? 1.5 : 1}
      />
    </group>
  );
}

const StarsCanvas = () => (
  <Canvas>
    <ambientLight />
    <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
      <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
    </directionalLight>
    <pointLight position={[10, 10, 10]} />
    <Glasses />
  </Canvas>
);

export default StarsCanvas;
