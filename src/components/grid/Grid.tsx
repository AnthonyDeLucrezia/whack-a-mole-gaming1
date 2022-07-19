import React from "react";
import { MoleProps } from "../mole/Mole";
import WAMBg from "./../../assets/WAM_bg.jpg";
import { GridLine } from "./GridLine";
import "./Grid.scss";

interface GridProps {
  gridData: MoleProps[][];
  onMoleClick: (id: string) => void;
}

export const Grid = (props: GridProps) => {
  const { gridData, onMoleClick } = props;
  return (
    <div
      className="wam-grid-container"
      style={{ backgroundImage: `url(${WAMBg})` }}
    >
      {gridData.map((row) => (
        <GridLine moles={row} onMoleClick={onMoleClick} />
      ))}
    </div>
  );
};
