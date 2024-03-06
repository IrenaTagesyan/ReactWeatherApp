const apiKey = "53973855c5b110301301eb500723e3e9";

export const currentDayWeather = async (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data, "currentDay");
    });
};

export const forecastDaysWeather = async (city) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data, "forecastDays");
    });
};
