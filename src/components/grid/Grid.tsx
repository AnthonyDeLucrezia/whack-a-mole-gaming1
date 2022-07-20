import React, { useState } from "react";
import { MoleProps } from "../mole/Mole";
import WAMBg from "./../../assets/WAM_bg.jpg";
import { GridLine } from "./GridLine";
import "./Grid.scss";
import { Hammer } from "../hammer/Hammer";

interface GridProps {
  gridData: MoleProps[][];
  onMoleClick: () => void;
}

export const Grid = (props: GridProps) => {
  const { gridData, onMoleClick } = props;

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    setCoords({
      x: event.pageX - 50,
      y: event.pageY - 50,
    });
  };

  return (
    <div
      className="wam-grid-container"
      aria-label="wam-grid"
      style={{ backgroundImage: `url(${WAMBg})` }}
      onMouseMove={handleMouseMove}
    >
      <Hammer posX={coords.x} posY={coords.y} />
      {gridData.map((row, index) => (
        <GridLine
          moles={row}
          onMoleClick={onMoleClick}
          key={`row${index + 1}`}
        />
      ))}
    </div>
  );
};
