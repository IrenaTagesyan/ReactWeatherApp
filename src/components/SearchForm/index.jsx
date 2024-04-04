import React, { useState } from "react";
import styles from "./searchForm.module.scss";
import { Button } from "../Button";
import { useDebouncedValue } from "../../hooks/debounced";

export const SearchForm = ({ searchWeather }) => {
  const [location, setLocation] = useState("");
  const debouncedSearch = useDebouncedValue(location, 200);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!debouncedSearch) {
      return;
    }
    searchWeather(debouncedSearch);
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <form>
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} `}
        placeholder="Search for location"
        required
        value={location}
        onChange={handleInputChange}
      />

      <Button btnText="SEARCH" onClick={onSubmit} />
    </form>
  );
};
