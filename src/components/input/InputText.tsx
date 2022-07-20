import { TextField } from "@mui/material";
import React from "react";

export interface InputProps {
  id: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  value: string;
}

export const Input = (props: InputProps) => {
  const { onChange, id, label, value } = props;
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      onChange={onChange}
      value={value}
      sx={{ padding: "15px" }}
    />
  );
};
