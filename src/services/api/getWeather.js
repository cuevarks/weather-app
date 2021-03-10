import { get } from "axios";
const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

export const getWeather = async (country) => {
  const request = `${REACT_APP_BASE_URL}${country}&appid=${REACT_APP_API_KEY}&units=metric`;

  try {
    const { data } = await get(request, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return data;
  } catch (e) {
    return [];
  }
};
