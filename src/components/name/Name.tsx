import React from "react";
import "./Name.scss";

interface NameProps {
  playerName: string;
}

export const Name = (props: NameProps) => {
  const { playerName } = props;
  return (
    <div className="wam-name-container">
      <h3 className="wam-name-label">Player : </h3>
      <h2 className="wam-name-name">{playerName}</h2>
    </div>
  );
};
