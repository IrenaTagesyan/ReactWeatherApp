import React, { useContext } from "react";
import { SearchForm } from "../../components/SearchForm";
import styles from "./mainPage.module.scss";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
import { ForecastDays } from "../../components/ForecastDays";
import { CurrentDayCard } from "../../components/CurrentDay/CurrentDayCard";
import { CurrentDayDescription } from "../../components/CurrentDay/CurrentDayDescription";
import { Button } from "../../components/Button";
import { WeatherAppContext } from "../../Context/weatherAppContext";
import {
  currentDayWeatherRequest,
  forecastDaysWeatherRequest,
} from "../../api/apiRequests";

export const MainPage = () => {
  const {
    state,
    showLoading,
    showSearchForm,
    showErrorMessage,
    settingCurrentDayData,
    settingForecastDaysData,
  } = useContext(WeatherAppContext);

  const searchWeather = async (inputValue) => {
    showLoading(true);
    showSearchForm(false);
    const currentDayWeatherData = await currentDayWeatherRequest(inputValue);
    const forecastDaysWeatherData = await forecastDaysWeatherRequest(
      inputValue
    );
    if (forecastDaysWeatherData.message || currentDayWeatherData.message) {
      showErrorMessage(forecastDaysWeatherData.message);
      showSearchForm(false);
      showLoading(false);
      return;
    }
    settingCurrentDayData(currentDayWeatherData);
    settingForecastDaysData(forecastDaysWeatherData);
    showLoading(false);
  };

  const handleButtonOnClick = () => {
    showSearchForm(true);
    settingCurrentDayData(null);
    settingForecastDaysData(null);
    showErrorMessage(false);
  };

  return (
    <>
      <Header />
      <div className={styles.box}>
        {/* Form  */}
        {state.isSearchFormShows && (
          <SearchForm searchWeather={searchWeather} />
        )}

        {/* Error */}
        {state.isErrorMessage && (
          <div className={styles.errorMessageWrapper}>
            <Error errorMessage={state.isErrorMessage} />
            <Button btnText="Go to search" onClick={handleButtonOnClick} />
          </div>
        )}

        {/* Loader */}
        {state.isLoading && <Loader />}

        {/* CurrentDay */}
        {state.currentDayData && (
          <CurrentDayCard currentDayData={state.currentDayData} />
        )}

        {/* ForecastDays */}
        {state.forecastDaysData && (
          <div className={styles.wrapper}>
            <CurrentDayDescription currentDayData={state.currentDayData} />
            <ForecastDays forecastDaysData={state.forecastDaysData} />
          </div>
        )}
      </div>
      {state.currentDayData && (
        <Button btnText="Go to search" onClick={handleButtonOnClick} />
      )}
    </>
  );
};
