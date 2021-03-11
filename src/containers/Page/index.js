import React from "react";
import { Provider } from "../../contexts/GlobalContext";
import { Search, WeatherDetails } from "../../components/index";

const Page = () => {
  return (
    <Provider>
      <main className="layout">
        <Search />
        <WeatherDetails />
      </main>
    </Provider>
  );
};

export default Page;
