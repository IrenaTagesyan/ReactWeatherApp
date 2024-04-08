import React from "react";
import styles from "./forecast.module.scss";
import { currentDay, weekDays } from "./constants";

export function ForecastDays({ forecastDaysData }) {
  const forecastDaysWeatherArray = forecastDaysData.list.slice(0, 4);

  const forecastDays = weekDays
    .slice(currentDay, weekDays.length)
    .concat(weekDays.slice(0, currentDay));

  return (
    <div className={styles.wrapper}>
      {forecastDaysWeatherArray.map((item, index) => (
        <div className={styles.box} key={index}>
          <img src={`images/${item.weather[0].icon}.png`} alt="weather" />
          <p>{forecastDays[index]}</p>
          <p>
            {Math.round(item.main.temp)}
            &deg;C
          </p>
        </div>
      ))}
    </div>
  );
}
