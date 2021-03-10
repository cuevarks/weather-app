import React from "react";

export const WeatherByDay = ({ iconCode }) => {
  return (
    <img
      alt="Weather condition icon"
      src={`http://openweathermap.org/img/wn/${iconCode}@4x.png`}
    />
  );
};
