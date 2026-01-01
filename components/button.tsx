"use client";

import { startTransition } from "react";

interface ButtonProps {
  name: string;
  onClick?: () => Promise<void>;
  type?: "submit" | "button";
  disabled?: boolean;
  noFunctional?: boolean;
  className?: string;
}

const Button = ({
  name,
  onClick,
  type = "button",
  disabled = false,
  noFunctional = false,
  className = "",
}: ButtonProps) => {
  const handleClick = () => {
    if (!onClick) return;

    startTransition(async () => {
      await onClick();
    });
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled || noFunctional}
      className={`rounded py-2 px-7 cursor-pointer bg-blue-950 hover:bg-blue-800 text-center flex items-center justify-center w-fit whitespace-nowrap ${className} `}
    >
      {name}
    </button>
  );
};

export default Button;
