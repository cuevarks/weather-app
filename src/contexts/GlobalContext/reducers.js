import { INITIAL_LOAD, WEATHER_DETAILS } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return {
        ...state,
        initialLoad: action.payload,
      };
    case WEATHER_DETAILS:
      return {
        ...state,
        weatherDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
