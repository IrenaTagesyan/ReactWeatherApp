import React from "react";
import styles from "./button.module.scss";

export const Button = ({ btnText, onClick }) => {
  return (
    // <div className={styles.wrapper}>
        <button className={styles} onClick={onClick}>
      {btnText}
    </button>
    //  </div> 
  );
};
