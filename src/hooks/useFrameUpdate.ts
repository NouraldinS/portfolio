import { useEffect, useState } from 'react';

const useFrameUpdate = <Result = void>(
  func: () => Result,
  framerate: number,
  dependencies?: unknown[],
) => {
  const [, setTimestamp] = useState(() => (new Date()).getTime());
  const [value, setValue] = useState<Result>(func);

  useEffect(() => {
    if (framerate <= 0 || framerate > 500) throw new Error('Unreachable framerate target');
    const interval = setInterval(() => {
      setValue(func());
      setTimestamp((new Date()).getTime());
    }, 1000 / framerate);
    return () => clearInterval(interval);
  }, [dependencies]);
  return value;
};

export default useFrameUpdate;
