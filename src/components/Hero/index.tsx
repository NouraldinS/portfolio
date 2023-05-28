import React, { useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import SpaceBackground from '../SpaceBackground';
import Particle from '../../helpers/draw/particle';
import useFrameUpdate from '../../hooks/useFrameUpdate';
import ParticleContainer from '../ParticleContainer';
import {
  lemniscateFunction, verticalWaveFunction,
} from '../../helpers/draw';

const Hero = () => {
  const mainParticle = useMemo(() => new Particle(
    0,
    0,
    (t) => lemniscateFunction(t, 0.5, 0.5),
  ), []);
  const particleA = useMemo(() => new Particle(0, 0, (t) => verticalWaveFunction(t, 0.5)), []);

  useFrameUpdate(() => {
    mainParticle.update();
    particleA.update();
  }, 30);

  return (
    <SpaceBackground>
      <div className="h-screen flex justify-center items-center flex-col text-4xl gap-10 text-cold-200 snap-start">
        <ParticleContainer particle={mainParticle}>Frontend Engineer</ParticleContainer>
        <span className="text-2xl flex items-center gap-1 animate-float" style={{ animationDelay: '6000ms' }}>
          <FontAwesomeIcon icon={faReact} />
          {' '}
          React Specialist
        </span>
      </div>
    </SpaceBackground>
  );
};

export default Hero;
