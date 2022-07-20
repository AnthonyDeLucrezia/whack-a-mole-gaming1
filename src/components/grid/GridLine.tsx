import React from "react";
import { Mole, MoleProps } from "../mole/Mole";
import "./Grid.scss";

interface GridLineProps {
  moles: MoleProps[];
  onMoleClick: () => void;
}

export const GridLine = (props: GridLineProps) => {
  const { moles, onMoleClick } = props;
  return (
    <div className="wam-grid-line">
      {moles.map((mole, index) => (
        <div className="wam-grid-item" key={`mole-${index + 1}`}>
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
