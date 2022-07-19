import { Button as MuiButton } from "@mui/material";
import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { onClick, label, disabled } = props;
  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      className="wam-button"
    >
      {label}
    </MuiButton>
  );
};
