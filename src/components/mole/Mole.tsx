import React from "react";
import WAMMole from "./../../assets/WAM_Mole.png";
import WAMHole from "./../../assets/WAM_Hole.png";
import "./Mole.scss";

export interface MoleProps {
  id: string;
  isHidden: boolean;
  onClick?: (id: string) => void;
}

export const Mole = (props: MoleProps) => {
  const { isHidden, onClick, id } = props;
  return (
    <div className="wam-mole-container">
      {isHidden ? (
        <img src={WAMHole} aria-label={"wam-hole"} />
      ) : (
        <img
          src={WAMMole}
          aria-label={"wam-mole"}
          onClick={onClick ? () => onClick(id) : undefined}
        />
      )}
    </div>
  );
};
