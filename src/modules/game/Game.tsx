import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Grid } from "../../components/grid/Grid";
import { Score } from "../../components/score/Score";
import {
  incrementScore,
  selectScore,
  selectActiveMoleId,
  startGameAsync,
} from "./GameSlice";

export const Game = () => {
  const score = useAppSelector(selectScore);
  const activeMoleId = useAppSelector(selectActiveMoleId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGameAsync());
  }, []);

  const onMoleClick = () => {
    dispatch(incrementScore());
  };

  return (
    <div className="wam-game-container">
      <Score scorePoints={score} />
      <Grid gridData={activeMoleId} onMoleClick={onMoleClick} />
    </div>
  );
};
