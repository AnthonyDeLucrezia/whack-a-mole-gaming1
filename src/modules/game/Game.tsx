import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Grid } from "../../components/grid/Grid";
import { Input } from "../../components/input/Input";
import { Score } from "../../components/score/Score";
import {
  incrementScore,
  selectScore,
  selectDataGrid,
  startGameAsync,
  selectStatus,
} from "./GameSlice";
import "./Game.scss";
import { Button } from "../../components/button/Button";
import Typography from "@mui/material/Typography";

export const Game = () => {
  const score = useAppSelector(selectScore);
  const dataGrid = useAppSelector(selectDataGrid);
  const gameStatus = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const [playerName, setPlayerName] = useState("");

  const onMoleClick = () => {
    dispatch(incrementScore());
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const onStart = () => {
    dispatch(startGameAsync());
  };

  return (
    <div className="wam-game-container">
      {gameStatus === "NOT STARTED" && (
        <div className="wam-player-name-container">
          <Typography variant="h4">Whack a mole Game</Typography>
          <Typography variant="h6">Enter your name to start</Typography>
          <Input
            id="input-player-name"
            label="Your name"
            value={playerName}
            onChange={onInputChange}
          />
          <Button
            label="Start"
            onClick={onStart}
            disabled={!playerName || playerName === ""}
          />
        </div>
      )}

      {gameStatus === "STARTED" && (
        <div className="wam-game">
          <Score scorePoints={score} />
          <Grid gridData={dataGrid} onMoleClick={onMoleClick} />
        </div>
      )}
    </div>
  );
};
