import React, { useContext } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Card } from "../index";
import { WeatherByDay } from "./WeatherByDay/index";
import { Loading } from "../index";
import GlobalContext from "../../contexts/GlobalContext/index";

export const WeatherDetails = () => {
  const {
    state: { initialLoad, weatherDetails },
  } = useContext(GlobalContext);

  const weatherSection = () => {
    return (
      <section className="weather-information">
        <h1 className="weather-city">{weatherDetails.name}</h1>
        <section className="weather-today">
          <div className="weather-today-container">
            <WeatherByDay iconCode={weatherDetails.currentWeather.icon} />
            <article className="weather-today-info">
              <h1>Today</h1>
              <h2>{weatherDetails.currentWeather.main}</h2>
            </article>
          </div>

          <article className="weather-subdetails">
            <p>
              {descriptionToUpperCase(
                weatherDetails.currentWeather.description
              )}
            </p>
          </article>
        </section>
      </section>
    );
  };

  const loadingSection = () => {
    return (
      <section className="weather-information loading">
        <Loading />
      </section>
    );
  };

  const initialLoadSection = () => {
    return (
      <section className="weather-information initial-load">
        <FaAngleUp />
        <article>Enter a country to find the weather</article>
      </section>
    );
  };

  const weatherExists = (weather) => {
    return Object.keys(weather).length ? true : false;
  };

  const descriptionToUpperCase = (description) => {
    return description[0].toUpperCase() + description.substring(1);
  };

  return (
    <Card styleClass="weather-card">
      {initialLoad
        ? initialLoadSection()
        : weatherExists(weatherDetails)
        ? weatherSection()
        : loadingSection()}
    </Card>
  );
};
