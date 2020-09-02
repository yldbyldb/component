import React from 'react';
import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <div className={classes.Button}>
      <button disabled={props.isClicked} onClick={props.onClick}>
        Contact Us
      </button>
    </div>
  );
};

export default Button;