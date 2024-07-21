import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} `}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
}
