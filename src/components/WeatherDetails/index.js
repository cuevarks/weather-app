import React, { useEffect, useState } from "react";
import { Card } from "../index";
import { WeatherByDay } from "./WeatherByDay/index";
import { getWeather } from "../../services/api/getWeather";

export const WeatherDetails = () => {
  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    const getWeatherInfo = async () => {
      const { name, main, weather } = await getWeather("London");
      const currentWeather = weather[0];
      console.log({ main, weather });
      setWeatherInfo({ name, main, currentWeather });
    };
    getWeatherInfo();
  }, []);

  const weatherExists = (weather) => {
    return Object.keys(weather).length ? true : false;
  };

  const descriptionToUpperCase = (description) => {
    return description[0].toUpperCase()+description.substring(1);
  }

  return (
    <Card styleClass="weather-card">
      {weatherExists(weatherInfo) ? (
        <div className="weather-information">
          <h1 className="weather-city">{weatherInfo.name}</h1>
          <div className="weather-today">
            <div className="weather-today-container">
              <WeatherByDay iconCode={weatherInfo.currentWeather.icon} />
              <div className="weather-today-info">
                <h1>Today</h1>
                <h2>{weatherInfo.currentWeather.main}</h2>
              </div>
            </div>

            <article className="weather-subdetails">
              <p>{descriptionToUpperCase(weatherInfo.currentWeather.description)}</p>
            </article>
          </div>
        </div>
      ) : (
        <p>hola</p>
      )}
    </Card>
  );
};
