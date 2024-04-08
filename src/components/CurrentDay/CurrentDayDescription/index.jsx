import React from "react";
import styles from "./currentDayDescription.module.scss";

export const CurrentDayDescription = ({ currentDayData }) => {
  const {
    main: { temp_max, temp_min, humidity, pressure },
  } = currentDayData;
  return (
    <div className={styles.descriptionWrapper}>
      <p>MAX TEMP : {Math.round(temp_max)}&deg;C</p>
      <p>MIN TEMP : {Math.round(temp_min)}&deg;C</p>
      <p>HUMIDITY : {humidity}%</p>
      <p>AIR PRESSURE : {pressure}mb</p>
    </div>
  );
};
