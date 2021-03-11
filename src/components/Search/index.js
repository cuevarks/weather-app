import React, { useContext, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { Card } from "../index";
import GlobalContext from "../../contexts/GlobalContext/index";

const countryData = require("i18n-iso-countries");
countryData.registerLocale(require("i18n-iso-countries/langs/en.json"));
const countryList = Object.values(
  countryData.getNames("en", { select: "official" })
);

export const Search = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const {
    dispatches,
    state: { initialLoad },
  } = useContext(GlobalContext);

  const handleSearchQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
    setShowSuggestions(true);
    setIsCorrect(false);
  };

  const handleEnter = (e) => {
    e.key === "Enter" && isCorrect && handleSubmit();
  };

  const handleSubmit = () => {
    isCorrect && dispatches.fetchWeather(query);
    initialLoad && dispatches.unsetInitial();
  };

  const handleSuggestion = (e) => {
    handleSearchQuery(e);
    setShowSuggestions(false);
    setIsCorrect(true);
  };

  return (
    <div className="search-card-container">
      <Card styleClass="search-card">
        <label htmlFor="search-query">
          <input
            id="search-query"
            onChange={handleSearchQuery}
            onKeyDown={handleEnter}
            type="text"
            value={query}
          />
        </label>
        <button
          aria-label="Search"
          className="search-submit"
          disabled={!isCorrect}
          onClick={handleSubmit}
        >
          <FaSearchLocation />
        </button>
      </Card>
      <Card styleClass={`search-suggestions ${showSuggestions && "active"}`}>
        {query &&
          countryList
            .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 5)
            .map((item) => (
              <button key={item} onClick={handleSuggestion} value={item}>
                {item}
              </button>
            ))}
      </Card>
    </div>
  );
};
