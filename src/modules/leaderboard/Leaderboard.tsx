import React from "react";
import { Button } from "../../components/button/Button";
import Typography from "@mui/material/Typography";
import { List } from "../../components/list/List";
import { ListItemProps } from "../../components/list/ListItem";
import { selectScore, startGameAsync } from "../game/GameSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPlayerName } from "../player/PlayerSlice";
import "./Leaderboard.scss";
import { Player } from "../player/Player.models";
import { sortPlayer } from "../../utils/utils";

export const Leaderboard = () => {
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectScore);
  const name = useAppSelector(selectPlayerName);

  const players: Player[] = [];

  players.push({
    id: `${1111111}`,
    name: name,
    score: score,
  });

  for (let cpt = 0; cpt < 10; cpt++) {
    players.push({
      id: `${cpt}`,
      name: `player-${cpt}`,
      score: 15 * cpt,
    });
  }

  const onRestart = () => {
    dispatch(startGameAsync());
  };
  return (
    <div className="wam-leaderboard-container">
      <Typography variant="h4">Leaderboard</Typography>
      <Typography variant="h6">Your score : {score}</Typography>
      <List
        items={players
          .sort(sortPlayer)
          .slice(0, 10)
          .map((x) => ({
            primaryText: x.name,
            secondaryText: x.score.toString(),
          }))}
      />
      <Button label="ReStart" onClick={onRestart} />
    </div>
  );
};
