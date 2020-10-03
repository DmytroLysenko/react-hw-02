import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  return (
    <div className={styles.container}>
      {options.map((item) => {
        return (
          <button
            className={styles.btn}
            key={item}
            onClick={() => onLeaveFeedback(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
