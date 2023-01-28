import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.scss";

const Form = ({ createNewTask }) => {
  const formRef = React.useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    createNewTask(formRef.current.title.value);
  };

  return (
    <article className={styles.Form}>
      <form onSubmit={onSubmit} ref={formRef}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          className={styles.Form__firstInput}
        />
        <input
          type="submit"
          value="Submit"
          className={styles.Form__submitBtn}
        />
      </form>
    </article>
  );
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
