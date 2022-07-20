import { Button as MuiButton } from "@mui/material";
import React from "react";

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
      sx={{ padding: "15px 25px" }}
    >
      {label}
    </MuiButton>
  );
};
