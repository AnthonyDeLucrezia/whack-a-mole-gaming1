import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { InputText } from "../../components/input/InputText";
import { startGameAsync } from "./../game/GameSlice";
import "./Player.scss";
import { Button } from "../../components/button/Button";
import Typography from "@mui/material/Typography";
import { savePlayerName, selectPlayerName } from "./PlayerSlice";

export const Player = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectPlayerName);
  const [playerName, setPlayerName] = useState(name || "");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const onStart = () => {
    dispatch(savePlayerName(playerName));
    dispatch(startGameAsync());
  };

  return (
    <div className="wam-player-name-container">
      <div className="wam-player-name-form">
        <Typography variant="h4">Whack a mole Game</Typography>
        <Typography variant="h6">Enter your name to start</Typography>
        <InputText
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
    </div>
  );
};
