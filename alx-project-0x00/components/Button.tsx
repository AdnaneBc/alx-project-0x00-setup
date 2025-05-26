import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return <div className={style}>{title}</div>;
};

export default Button;
