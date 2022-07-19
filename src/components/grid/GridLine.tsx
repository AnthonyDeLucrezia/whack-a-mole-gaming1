import React from "react";
import { Mole, MoleProps } from "../mole/Mole";
import "./Grid.scss";

interface GridLineProps {
  moles: MoleProps[];
  onMoleClick: (id: string) => void;
}

export const GridLine = (props: GridLineProps) => {
  const { moles, onMoleClick } = props;
  return (
    <div className="wam-grid-line">
      {moles.map((mole) => (
        <div className="wam-grid-item">
          <Mole
            isHidden={mole.isHidden}
            id={mole.id}
            onClick={mole.isHidden ? undefined : onMoleClick}
          />
        </div>
      ))}
    </div>
  );
};
