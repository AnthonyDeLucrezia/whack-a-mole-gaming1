import React, { useEffect, useState } from "react";
import WAHammer from "./../../assets/WAM_Hammer.png";
import "./Hammer.scss";

export interface HammerProps {
  posX: number;
  posY: number;
}

export const Hammer = (props: HammerProps) => {
  const { posX, posY } = props;
  const [animation, setAnimation] = useState(false);

  const onClick = () => {
    setAnimation(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (animation) {
        setAnimation(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [animation]);

  useEffect(() => {
    document.addEventListener("click", () => {
      onClick();
    });
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="wam-hammer-container" key="wam-hammer">
      <img
        src={WAHammer}
        aria-label={"wam-hammer"}
        style={{ top: posY, left: posX }}
        className={animation ? "wham-hamer-animation" : ""}
      />
    </div>
  );
};
