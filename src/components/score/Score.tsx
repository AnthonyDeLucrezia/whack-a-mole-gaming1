import React from "react";
import "./Score.scss";

interface ScoreProps {
  size?: "small" | "medium" | "large";
  scorePoints: number;
}

export const Score = (props: ScoreProps) => {
  const { scorePoints } = props;
  return (
    <div className="wam-score-container">
      <h2 className="wam-score-label">Score</h2>
      <h1 className="wam-score-points">{scorePoints}</h1>
    </div>
  );
};
