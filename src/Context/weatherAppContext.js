import { createContext, useReducer } from 'react';
import { weatherAppReducer } from './weatherAppReducer';
import { initialState } from './initialState';
import { actions } from './actions';

export const WeatherAppContext = createContext();

export function WeatherAppContextProvider({ children }) {
  const [state, dispatch] = useReducer(weatherAppReducer, initialState);

  const showLoading = (showOrHide) => {
    dispatch({ type: actions.SHOW_LOADING, payload: showOrHide });
  };

  const showSearchForm = (showOrHide) => {
    dispatch({ type: actions.SHOW_SEARCH_FORM, payload: showOrHide });
  };

  const showErrorMessage = (message) => {
    dispatch({ type: actions.SHOW_ERROR_MESSAGE, payload: message });
  };

  const settingCurrentDayData = (data) => {
    dispatch({ type: actions.SETTING_CURRENT_DAY_DATA, payload: data });
  };

  const settingForecastDaysData = (data) => {
    dispatch({ type: actions.SETTING_FORECAST_DAYS_DATA, payload: data });
  };

  const data = {
    state,
    showLoading,
    showSearchForm,
    showErrorMessage,
    settingCurrentDayData,
    settingForecastDaysData,
  };

  return (
    <WeatherAppContext.Provider value={data}>
      {children}
    </WeatherAppContext.Provider>
  );
}
