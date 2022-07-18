import React from "react";
import WAMMole from "./../../assets/WAM_Mole.png";
import WAMHole from "./../../assets/WAM_Hole.png";
import "./Mole.scss";

interface MoleProps {
  id: string | number;
  isHidden: boolean;
  name?: string;
}

export const Mole = (props: MoleProps) => {
  const { isHidden } = props;
  return (
    <div className="wam-mole-container">
      {isHidden ? (
        <img src={WAMHole} aria-label={"wam-hole"} />
      ) : (
        <img src={WAMMole} aria-label={"wam-mole"} />
      )}
    </div>
  );
};
