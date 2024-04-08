import { actions } from './actions';

export const weatherAppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SHOW_LOADING:
      return { ...state, isLoading: payload };

    case actions.SHOW_SEARCH_FORM:
      return { ...state, isSearchFormShows: payload };
    case actions.SHOW_ERROR_MESSAGE:
      return { ...state, isErrorMessage: payload };
    case actions.SETTING_CURRENT_DAY_DATA:
      return { ...state, currentDayData: payload };
    case actions.SETTING_FORECAST_DAYS_DATA:
      return { ...state, forecastDaysData: payload };

    default:
      break;
  }
};
