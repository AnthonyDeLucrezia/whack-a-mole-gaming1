import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Grid } from "../../components/grid/Grid";
import { Score } from "../../components/score/Score";
import { incrementScore, selectScore, selectDataGrid } from "./GameSlice";
import "./Game.scss";

export const Game = () => {
  const score = useAppSelector(selectScore);
  const dataGrid = useAppSelector(selectDataGrid);
  const dispatch = useAppDispatch();

  const onMoleClick = () => {
    dispatch(incrementScore());
  };

  return (
    <div className="wam-game">
      <Score scorePoints={score} />
      <Grid gridData={dataGrid} onMoleClick={onMoleClick} />
    </div>
  );
};
