import React from "react";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <h1 className={styles.heading}>
      <span className={styles.light}>Weather</span> Forecast
    </h1>
  );
};
