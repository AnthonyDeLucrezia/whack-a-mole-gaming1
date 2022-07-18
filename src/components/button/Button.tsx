import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({ size = "medium", label, ...props }: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};
