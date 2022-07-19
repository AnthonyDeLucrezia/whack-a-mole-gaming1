import React, { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!isHidden);
  }, [isHidden]);

  const onVisibilityChange = (id: string) => {
    setIsVisible(false);
    if (onClick) onClick(id);
  };

  return (
    <div className="wam-mole-container">
      {!isVisible ? (
        <img src={WAMHole} aria-label={"wam-hole"} />
      ) : (
        <img
          src={WAMMole}
          aria-label={"wam-mole"}
          onClick={onClick ? () => onVisibilityChange(id) : undefined}
        />
      )}
    </div>
  );
};
