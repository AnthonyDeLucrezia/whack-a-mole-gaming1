import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Game } from "../modules/game/Game";
import { selectStatus } from "../modules/game/GameSlice";
import { Player } from "../modules/player/Player";
import { theme } from "../styles/MuiPalette";
import "./../styles/global.scss";
import "./App.scss";
import { useAppSelector } from "./hooks";

export const App = () => {
  const gameStatus = useAppSelector(selectStatus);
  return (
    <ThemeProvider theme={theme}>
      <div className="wam-app-container">
        {gameStatus === "NOT STARTED" && <Player />}

        {gameStatus === "STARTED" && <Game />}
      </div>
    </ThemeProvider>
  );
};
