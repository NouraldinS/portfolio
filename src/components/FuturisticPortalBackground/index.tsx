import React, {
  PropsWithChildren, useMemo,
} from 'react';
import RelativeBackground from '../RelativeBackground';
import useFrameUpdate from '../../hooks/useFrameUpdate';
import { parseHexColor } from '../../helpers/draw';

const FuturisticPortalBackground: React.FC<PropsWithChildren> = ({ children }) => {
  const portals = useMemo(() => Array(Math.floor(window.innerWidth / 250)).fill(0)
    .map((_, ix) => ix), []);
  const gradientTos = useFrameUpdate(() => {
    const [startRed, startGreen, startBlue] = parseHexColor(0xe9c46a);
    const [endRed, endGreen, endBlue] = parseHexColor(0xe89a5e);

    return portals.map((index) => {
      // Shift timestamp by delay tmie amount
      const timestamp = (new Date()).getTime() / 1000 - index * 1000;
      // Sin wave between [0, 1] and a period of 10 to synchronize with animation time
      const t = (Math.sin((timestamp * 2 * Math.PI) / 10)) / 2 + 0.5;
      const newRed = Math.floor(t * (endRed - startRed) + startRed) << 16;
      const newGreen = Math.floor(t * (endGreen - startGreen) + startGreen) << 8;
      const newBlue = Math.floor(t * (endBlue - startBlue) + startBlue);

      return `#${(newRed + newGreen + newBlue).toString(16)}`;
    });
  }, 60, [portals]);
  return (
    <RelativeBackground>
      {
        portals.map((ix) => (
          <div
            key={ix}
            className="absolute animate-rotate3d from-hot-600 to-hot-400"
            style={{
              inset: `${ix * 2}rem`,
              borderWidth: 20,
              borderStyle: 'solid',
              borderImage: `linear-gradient(to right, ${gradientTos[ix]}, var(--tw-gradient-from)) 1`,
              animationDelay: `-${ix}s`,
            }}
          >
            <div className="absolute m-8 bg-mainBg" />
          </div>
        ))
      }
      <div className="relative">
        {children}
      </div>
    </RelativeBackground>
  );
};

export default FuturisticPortalBackground;
