import { useState } from "react";

export const useWeather = () => {
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchFormShows, setIsSearchFormShows] = useState(true);
  const [forecastDaysData, setForecastDaysData] = useState(null);
  const [currentDayData, setCurrentDayData] = useState(null);

  const apiKey = "53973855c5b110301301eb500723e3e9";

  const currentDayWeatherRequest = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const forecastDaysWeatherRequest = async (city) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isErrorMessage,
    isLoading,
    forecastDaysData,
    isSearchFormShows,
    currentDayData,
    setCurrentDayData,
    setIsSearchFormShows,
    setIsErrorMessage,
    setIsLoading,
    setForecastDaysData,
    currentDayWeatherRequest,
    forecastDaysWeatherRequest,
  };
};
