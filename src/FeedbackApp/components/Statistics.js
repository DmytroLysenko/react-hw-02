import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = (props) => {
  const { options, total, positivePercentage } = props;

  return total === 0 ? (
    <p className={styles.message}>No feedback given</p>
  ) : (
    <ul className={styles.list}>
      {Object.entries(options).map((item) => (
        <li key={item[0]} className={styles.listItem}>
          {item[0].charAt(0).toUpperCase() + item[0].slice(1)}: {item[1]}
        </li>
      ))}
      <li className={styles["listItem--accent"]}>Total: {total}</li>
      <li className={styles["listItem--accent"]}>
        Positive feedback: {positivePercentage}
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
