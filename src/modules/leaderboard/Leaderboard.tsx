import React from "react";
import { Button } from "../../components/button/Button";
import Typography from "@mui/material/Typography";
import { List } from "../../components/list/List";
import { ListItemProps } from "../../components/list/ListItem";
import { selectScore, startGameAsync } from "../game/GameSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPlayerName } from "../player/PlayerSlice";

export const Leaderboard = () => {
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectScore);
  const name = useAppSelector(selectPlayerName);
  const listItems: ListItemProps[] = [
    { primaryText: name, secondaryText: `${score}` },
  ];
  const onRestart = () => {
    dispatch(startGameAsync());
  };
  return (
    <div className="wam-player-name-container">
      <Typography variant="h4">Leaderboard</Typography>
      <Typography variant="h6">Your score : {score}</Typography>
      <List items={listItems} />
      <Button label="ReStart" onClick={onRestart} />
    </div>
  );
};
