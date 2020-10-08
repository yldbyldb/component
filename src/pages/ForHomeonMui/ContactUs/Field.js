import React from "react";
import PropTypes from "prop-types";
import classes from "./Field.module.scss";

const Field = (props) => (
  <div className={props.isError ? classes.Red : classes.Nor}>
    <input
      type="text"
      size="40"
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
      onClick={props.onClick}
      placeholder={props.isError ? props.error : props.label}
    />
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired,
};
Field.defaultProps = {
  textarea: false,
};

export default Field;
