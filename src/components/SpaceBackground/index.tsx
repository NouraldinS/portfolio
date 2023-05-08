import React, { useEffect, useId, useRef } from 'react';
import { degToRad, drawStar, randomBetween } from '../../helpers/draw';
import Particle from '../../helpers/draw/particle';

const SpaceBackground = () => {
  const id = useId();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      const layers = [
        {
          speed: 0.1, count: 400, direction: degToRad(-25), r: 1,
        },
        {
          speed: 0.15, count: 200, direction: degToRad(-35), r: 2,
        },
        {
          speed: 0.2, count: 30, direction: degToRad(-45), r: 3,
        },
      ];

      const stars: Particle[] = [];
      layers.forEach((layer) => {
        for (let i = 0; i <= layer.count; i += 1) {
          const particle = new Particle(
            randomBetween(0, width),
            randomBetween(0, height),
            layer.speed,
            layer.direction,
          );
          particle.setProperty('radius', layer.r);
          stars.push(particle);
        }
      });
      const update = () => {
        ctx.clearRect(0, 0, width, height);
        stars.forEach((star) => {
          star.update({
            x1: 0, y1: 0, x2: width, y2: height,
          });
          drawStar(ctx, star);
        });
        requestAnimationFrame(update);
      };
      update();
    }
  }, []);
  return (
    <canvas ref={ref} id={`space-background-${id}`} className="absolute inset-0 w-full h-full pointer-events-none" />
  );
};

export default SpaceBackground;
