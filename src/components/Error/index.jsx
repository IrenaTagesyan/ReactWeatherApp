import styles from "./error.module.scss";

export const Error = ({ errorMessage }) => {
  return <p className={styles.errorMessage}>{errorMessage.toUpperCase()}</p>;
};
