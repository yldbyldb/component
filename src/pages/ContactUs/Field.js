import React from "react";
import PropTypes from "prop-types";
import classes from './Field.module.scss';

const Field = (props) => (
  props.isError ?
  <div className={classes.Red}>
    <input
      type="text"
      size='40'
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
      // errorText={props.errorText}
      onClick={props.onClick}
      placeholder={props.error}
    />
  </div>
    :
    <div className={classes.Nor}>
    <input
      type="text"
      size='40'
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
      // errorText={props.errorText}
      onClick={props.onClick}
      placeholder={props.label}
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
