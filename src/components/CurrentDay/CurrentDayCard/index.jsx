import React from "react";
import styles from "./currentDayCard.module.scss";

export const CurrentDayCard = ({ currentDayData }) => {
  const {
    name,
    main: { temp },
    weather,
  } = currentDayData;
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <div>
        <p>{Math.round(temp)}&deg;C</p>
        <span>{weather[0].description}</span>
      </div>
    </div>
  );
};
