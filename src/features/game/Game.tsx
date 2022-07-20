import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Grid } from "../../components/grid/Grid";
import { Score } from "../../components/score/Score";
import { incrementScore, selectScore, selectDataGrid } from "./GameSlice";
import "./Game.scss";
import { selectPlayerName } from "../player/PlayerSlice";

export const Game = () => {
  const score = useAppSelector(selectScore);
  const dataGrid = useAppSelector(selectDataGrid);
  const name = useAppSelector(selectPlayerName);
  const dispatch = useAppDispatch();

  const onMoleClick = () => {
    dispatch(incrementScore());
  };

  return (
    <div className="wam-game">
      <Score scorePoints={score} />
      <h3 className="wam-game-player-name">{name}</h3>
      <Grid gridData={dataGrid} onMoleClick={onMoleClick} />
    </div>
  );
};
