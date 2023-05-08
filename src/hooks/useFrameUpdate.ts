import { useEffect, useState } from 'react';

const useFrameUpdate = (func: () => void, framerate: number) => {
  const [, setTimestamp] = useState(() => (new Date()).getTime());

  useEffect(() => {
    if (framerate < 0 || framerate > 500) throw new Error('Unreachable framerate target');
    const interval = setInterval(() => {
      func();
      setTimestamp((new Date()).getTime());
    }, 1000 / framerate);
    return () => clearInterval(interval);
  }, []);
};

export default useFrameUpdate;
