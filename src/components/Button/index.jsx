import React from "react";
import "./button.module.scss";

export const Button = ({ btnText, onClick }) => {
  return <button onClick={onClick}>{btnText}</button>;
};
