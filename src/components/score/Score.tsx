import React from "react";
import "./Score.scss";

interface ScoreProps {
  scorePoints: number;
}

export const Score = (props: ScoreProps) => {
  const { scorePoints } = props;
  return (
    <div className="wam-score-container">
      <h3 className="wam-score-label">Score : </h3>
      <h2 className="wam-score-points">{scorePoints}</h2>
    </div>
  );
};
