"use client";

import { FC } from "react";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean;
  noFunctional?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  name,
  onClick = () => {},
  type = "button",
  disabled = false,
  noFunctional = false,
  className = "",
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled || noFunctional}
        className={`rounded py-2 px-7 cursor-pointer bg-blue-950 hover:bg-blue-800 ${className}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
