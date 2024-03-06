import React from "react";
import styles from "./forecast.module.scss";

export const ForecastDays = ({ forecastDaysData }) => {
  const forecastDaysWeatherArray = [
    forecastDaysData.list[0],
    forecastDaysData.list[1],
    forecastDaysData.list[2],
    forecastDaysData.list[3],
  ];
  const currentDay = new Date().getDay();
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const forecastDays = weekDays
    .slice(currentDay, weekDays.length)
    .concat(weekDays.slice(0, currentDay));

  return (
    <div className={styles.wrapper}>
      {forecastDaysWeatherArray.map((item, index) => {
        return (
          <div className={styles.box} key={index}>
            <img src={`images/${item.weather[0].icon}.png`} alt="weather" />
            <p>{forecastDays[index]}</p>
            <p>{Math.round(item.main.temp)}&deg;C</p>
          </div>
        );
      })}
    </div>
  );
};
