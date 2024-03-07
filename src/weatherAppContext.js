import { createContext } from "react";
import { useState } from "react";

export const WeatherAppContext = createContext();

export const WeatherAppContextProvider = ({ children }) => {
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchFormShows, setIsSearchFormShows] = useState(true);
  const [forecastDaysData, setForecastDaysData] = useState(null);
  const [currentDayData, setCurrentDayData] = useState(null);

  const currentDayWeatherRequest = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
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
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
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

  return (
    <WeatherAppContext.Provider value={data}>
      {children}
    </WeatherAppContext.Provider>
  );
};
