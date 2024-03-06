import styles from "./error.module.css";

export const Error = ({ errorMessage }) => {
  return <p className={styles.errorMessage}>{errorMessage.toUpperCase()}</p>;
};
