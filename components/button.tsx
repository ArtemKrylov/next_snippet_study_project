"use client";

import { FC } from "react";

interface ButtonProps {
  name: string;
  click?: () => void;
  type?: "submit" | "button";
  disabled?: boolean;
  noFunctional?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  name,
  click = () => {},
  type = "button",
  disabled = false,
  noFunctional = false,
  className = "",
}) => {
  return (
    <button
      onClick={click}
      type={type}
      disabled={disabled || noFunctional}
      className={`rounded py-2 px-7 cursor-pointer bg-blue-950 hover:bg-blue-800 text-center ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
