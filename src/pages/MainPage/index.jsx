import React from "react";
import { SearchForm } from "../../components/SearchForm";
import styles from "./mainPage.module.scss";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
import { useWeather } from "../../hooks/useWeather";
import { ForecastDays } from "../../components/ForecastDays";
import { CurrentDayCard } from "../../components/CurrentDay/CurrentDayCard";
import { CurrentDayDescription } from "../../components/CurrentDay/CurrentDayDescription";
import { Button } from "../../components/Button";

export const MainPage = () => {
  const {
    isErrorMessage,
    isLoading,
    forecastDaysData,
    forecastDaysWeatherRequest,
    currentDayWeatherRequest,
    setIsLoading,
    isSearchFormShows,
    setIsSearchFormShows,
    setForecastDaysData,
    currentDayData,
    setCurrentDayData,
    setIsErrorMessage,
  } = useWeather();

  const searchWeather = async (inputValue) => {
    setIsLoading(true);
    setIsSearchFormShows(false);

    const currentDayWeatherData = await currentDayWeatherRequest(inputValue);
    const forecastDaysWeatherData = await forecastDaysWeatherRequest(
      inputValue
    );
    if (forecastDaysWeatherData.message || currentDayWeatherData.message) {
      setIsErrorMessage(forecastDaysWeatherData.message);
      setIsSearchFormShows(false);
      setIsLoading(false);
      return;
    }

    setCurrentDayData(currentDayWeatherData);
    setForecastDaysData(forecastDaysWeatherData);
    setIsLoading(false);
  };

  const handleButtonOnClick = () => {
    setIsSearchFormShows(true);
    setCurrentDayData(null);
    setForecastDaysData(null);
    setIsErrorMessage(false);
  };

  return (
    <>
      <Header />
      <div className={styles.box}>
        {/* Form  */}
        {isSearchFormShows && <SearchForm searchWeather={searchWeather} />}

        {/* Error */}
        {isErrorMessage && (
          <div className={styles.errorMessageWrapper}>
            <Error errorMessage={isErrorMessage} />
            <Button btnText="Go to search" onClick={handleButtonOnClick} />
          </div>
        )}

        {/* Loader */}
        {isLoading && <Loader />}

        {/* CurrentDay */}
        {currentDayData && <CurrentDayCard currentDayData={currentDayData} />}

        {/* ForecastDays */}
        {forecastDaysData && (
          <div className={styles.wrapper}>
            <CurrentDayDescription currentDayData={currentDayData} />
            <ForecastDays forecastDaysData={forecastDaysData} />
          </div>
        )}
      </div>
      {currentDayData && (
        <Button btnText="Go to search" onClick={handleButtonOnClick} />
      )}
    </>
  );
};
