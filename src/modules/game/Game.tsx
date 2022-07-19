import React, { useEffect, useState } from "react";
import { Grid } from "../../components/grid/Grid";
import { MoleProps } from "../../components/mole/Mole";
import { generateMoles, getRandomMoleId } from "../../utils/utils";

export const Game = () => {
  const numberOfRow = 3;
  const numberOfCols = 4;
  const [gridData, setGridData] = useState<MoleProps[][]>([]);
  const [activeMoleId, setActiveMoleId] = useState<string>();

  useEffect(() => {
    const grid = generateMoles(numberOfRow, numberOfCols, activeMoleId);
    setGridData(grid);
  }, [activeMoleId]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = getRandomMoleId(numberOfRow, numberOfCols);
      setActiveMoleId(randomId);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onMoleClick = (id: string) => {
    console.log(id);
  };

  return (
    <div className="wam-game-container">
      <Grid gridData={gridData} onMoleClick={onMoleClick} />
    </div>
  );
};
