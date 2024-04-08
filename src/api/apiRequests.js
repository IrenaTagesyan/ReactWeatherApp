export const currentDayWeatherRequest = async (city) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const forecastDaysWeatherRequest = async (city) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
