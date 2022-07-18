import React from "react";
import { MoleProps } from "../mole/Mole";
import WAMBg from "./../../assets/WAM_bg.jpg";
import { GridLine } from "./GridLine";
import "./Grid.scss";

interface GridProps {
  molesArr: MoleProps[][];
}

export const Grid = (props: GridProps) => {
  const { molesArr } = props;
  return (
    <div
      className="wam-grid-container"
      style={{ backgroundImage: `url(${WAMBg})` }}
    >
      {molesArr.map((row) => (
        <GridLine moles={row} />
      ))}
    </div>
  );
};
