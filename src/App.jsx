import { WeatherAppContextProvider } from "./Context/weatherAppContext";
import { MainPage } from "./pages/MainPage";

export const App = () => {
  return (
    <WeatherAppContextProvider>
      <MainPage />
    </WeatherAppContextProvider>
  );
};
