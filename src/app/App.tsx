import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { GameStatus } from "../models/app.models";
import { Game } from "../features/game/Game";
import { selectStatus } from "../features/game/GameSlice";
import { Leaderboard } from "../features/leaderboard/Leaderboard";
import { Player } from "../features/player/Player";
import { theme } from "../styles/MuiPalette";
import "./../styles/global.scss";
import "./App.scss";
import { useAppSelector } from "./hooks";

export const App = () => {
  const gameStatus = useAppSelector(selectStatus);
  return (
    <ThemeProvider theme={theme}>
      <div className="wam-app-container">
        {gameStatus === GameStatus.NotStarted && <Player />}
        {gameStatus === GameStatus.Started && <Game />}
        {gameStatus === GameStatus.Finished && <Leaderboard />}
      </div>
    </ThemeProvider>
  );
};
