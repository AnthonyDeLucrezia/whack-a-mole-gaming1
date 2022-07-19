import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "../../components/grid/Grid";
import { MoleProps } from "../../components/mole/Mole";
import { Score } from "../../components/score/Score";
import { generateMoles, getRandomMoleId } from "../../utils/utils";
import { incrementScore, selectScore } from "./GameSlice";

export const Game = () => {
  const numberOfRow = 3;
  const numberOfCols = 4;
  const score = useSelector(selectScore);
  const dispatch = useDispatch();
  const [gridData, setGridData] = useState<MoleProps[][]>([]);
  const [activeMoleId, setActiveMoleId] =
    useState<string | undefined>(undefined);

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
    dispatch(incrementScore());
  };

  return (
    <div className="wam-game-container">
      <Score scorePoints={score} />
      <Grid gridData={gridData} onMoleClick={onMoleClick} />
    </div>
  );
};
