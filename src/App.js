import React from "react";
import { Search, WeatherDetails } from "./components/index";

export default function App() {
  return (
    <main className="layout">
      <Search />
      <WeatherDetails />
    </main>
  );
}
