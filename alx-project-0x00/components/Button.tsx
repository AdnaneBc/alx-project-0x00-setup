import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return <div className={styles}>{title}</div>;
};

export default Button;
