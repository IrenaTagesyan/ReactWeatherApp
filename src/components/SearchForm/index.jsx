import React, { useState } from "react";
import styles from "./searchForm.module.scss";
import { Button } from "../Button";

export const SearchForm = ({ searchWeather }) => {
  const [location, setLocation] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!location || location === "") {
      return;
    }
    searchWeather(location);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} `}
        placeholder="Search for location"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* <button type="submit" className={styles.button} onClick={onSubmit}>
        SEARCH
      </button> */}
      <Button btnText="SEARCH" onClick={onSubmit} />
    </form>
  );
};
