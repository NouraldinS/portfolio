import { useState } from 'react';

type Stage = number;
type BeforeStageChangeType = (prevStage: Stage, nextStage: Stage) => void;

type UseRevealGridOptions = {
  initialStage?: Stage;
  beforeStageChange?: BeforeStageChangeType;

}

type UseRevealGridType = (options: UseRevealGridOptions) => [stage: Stage, onStageChange: (stage: Stage) => void, reset: () => void]

const useRevealGrid: UseRevealGridType = ({ initialStage = 0, beforeStageChange }) => {
  const [stage, setStage] = useState<number>(initialStage);


  return [stage, setStage, () => setStage(initialStage)];
};

export default useRevealGrid;