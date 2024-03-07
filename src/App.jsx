import { MainPage } from "./pages/MainPage";
import { WeatherAppContextProvider } from "./weatherAppContext";

export const App = () => {
  return (
    <WeatherAppContextProvider>
      <MainPage />
    </WeatherAppContextProvider>
  );
};
