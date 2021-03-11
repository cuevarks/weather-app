import React, { createContext, useReducer } from "react";
import reducer from "./reducers";
import { INITIAL_LOAD, WEATHER_DETAILS } from "./types";
import { getWeather } from "../../services/api/index";

const INIT = {
  weatherDetails: {},
  initialLoad: true,
};

const GlobalContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT);

  const dispatches = {
    fetchWeather: async (city) => {
      const { name, main, weather } = await getWeather(city);
      const currentWeather = weather[0];
      dispatch({
        type: WEATHER_DETAILS,
        payload: { name, main, currentWeather },
      });
    },
    unsetInitial: () => {
      dispatch({
        type: INITIAL_LOAD,
        payload: false,
      });
    },
  };

  return (
    <GlobalContext.Provider value={{ state, dispatches }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext as default, Provider };
