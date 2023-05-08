import React, { PropsWithChildren } from 'react';
import Particle from '../../helpers/draw/particle';

interface ParticleContainerProps extends PropsWithChildren {
  particle: Particle;
  className?: string;
  style?: React.CSSProperties;
}

const ParticleContainer: React.FC<ParticleContainerProps> = ({
  children,
  particle,
  className,
  style,
}) => (
  <span
    className={className}
    style={{ transform: `translate(${particle.position.x}px, ${particle.position.y}px)`, ...style }}
  >
    {children}
  </span>
);

export default ParticleContainer;
