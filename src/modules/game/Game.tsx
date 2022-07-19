import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Grid } from "../../components/grid/Grid";
import { Input } from "../../components/input/input";
import { Score } from "../../components/score/Score";
import {
  incrementScore,
  selectScore,
  selectDataGrid,
  startGameAsync,
  selectStatus,
} from "./GameSlice";
import "./Game.scss";

export const Game = () => {
  const score = useAppSelector(selectScore);
  const dataGrid = useAppSelector(selectDataGrid);
  const gameStatus = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    // dispatch(startGameAsync());
  }, []);

  const onMoleClick = () => {
    dispatch(incrementScore());
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    <div className="wam-game-container">
      <Input
        id="input-player-name"
        label="Enter your name to start a new game"
        value={playerName}
        onChange={onInputChange}
      />

      {gameStatus === "STARTED" && (
        <div className="wam-game">
          <Score scorePoints={score} />
          <Grid gridData={dataGrid} onMoleClick={onMoleClick} />{" "}
        </div>
      )}
    </div>
  );
};
