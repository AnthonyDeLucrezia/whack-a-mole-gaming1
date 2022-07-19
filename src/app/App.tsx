import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Game } from "../modules/game/Game";
import { theme } from "../styles/MuiPalette";
import "./../styles/global.scss";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  );
};
