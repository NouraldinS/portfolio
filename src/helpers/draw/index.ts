import Particle from './particle';

type VectorDestructor = (speed: number, direction: number) => number;

export const probability = (p: number): boolean => Math.random() < p;

export const verticalComponent: VectorDestructor = (
  speed,
  direction,
) => Math.cos(direction) * speed;
export const horizontalComponent: VectorDestructor = (
  speed,
  direction,
) => Math.sin(direction) * speed;

export const getVectorLength = (xv: number, yv: number): number => Math.sqrt(xv ** 2 + yv ** 2);

export const randomBetween = (
  min: number,
  max: number,
): number => Math.floor(Math.random() * (max - min + 1) + min);

export const drawStar = (context: CanvasRenderingContext2D, particle: Particle) => {
  // If a particle is opaque, then it has .1% chance to dim
  if (particle.properties.opacity === 1 && probability(0.001)) {
    particle.setProperty('opacity', 0.4);
    // If particle is dim, then it has .3% chance to birghten up
  } else if (particle.properties.opacity !== 1 && probability(0.003)) {
    particle.setProperty('opacity', 1);
  }
  context.fillStyle = `rgba(233, 196, 106, ${particle.properties.opacity})`;
  context.beginPath();
  context.arc(
    particle.position.x,
    particle.position.y,
    particle.properties.radius,
    0,
    Math.PI * 2,
    false,
  );
  context.fill();
};

export const degToRad = (deg: number) => deg * (Math.PI / 180);

export const FRAME_DURATION_60 = 1000 / 60;
export const FRAME_DURATION_30 = 1000 / 30;

export const lemniscateFunction = (
  timestamp: number,
  aFactor = 1,
  bFactor = 1,
): [number, number] => {
  const t = 1 * Math.PI * (timestamp / 10000);

  const xv = aFactor * Math.sin(t);
  const yv = bFactor * Math.sin(t * 2 + (Math.PI / 2));

  return [xv, yv];
};

export const verticalWaveFunction = (timestamp: number, factor = 1): [0, number] => {
  const t = 1 * Math.PI * (timestamp / 10000);
  const yv = factor * Math.sin(t);

  return [0, yv];
};

/**
 *
 * @param {number} numberOfRows Number of rows in the screen
 * @param {number} numberOfColumns Number of columns in the screen
 * @param {Function} [darkSpotFunction] A function to determin the availability of a spot based on
 * its position within the grid
 *
 * @returns {[number, number][]} Array of [x,y] coordinates, each representing top left corner
 * of a region
 */
export const divideScreenIntoRegions = (
  numberOfRows: number,
  numberOfColumns: number,
  darkSpotFunction?: (row: number, col: number) => boolean,
): [number, number][] => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const regionWidth = width / numberOfColumns;
  const regionHeight = height / numberOfRows;
  const regions: [number, number][] = [];
  for (let ic = 0; ic < numberOfColumns; ic += 1) {
    for (let ir = 0; ir < numberOfRows; ir += 1) {
      if (darkSpotFunction) {
        if (darkSpotFunction(ir, ic)) {
          regions.push([ic * regionWidth, ir * regionHeight]);
        }
      } else {
        regions.push([ic * regionWidth, ir * regionHeight]);
      }
    }
  }

  return regions;
};

export const shuffle = (array: any[]) => [...array].sort(() => (Math.random() > 0.5 ? 1 : -1));

export const randomPointOnEllipse = (a: number, b: number): [number, number] => {
  const x = randomBetween(-a, a);
  const y = Math.sqrt(b ** 2 * (1 - (x ** 2 / a ** 2)));
  return [x + a, y + b];
};

export const parseHexColor = (hex: number) => {
  const red = (hex >> 16) & 255;
  const green = (hex >> 8) & 255;
  const blue = hex & 255;
  return [red, green, blue];
};

export const timeToPercent = (t: number) => Math.abs(Math.sin(t));

export const easeInQuad = (x: number) => x * x;
