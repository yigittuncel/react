import React from "react";
import styles from './Button.module.css'
import Wrapper from "../Helpers/Wrapper";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >{props.children}</button>
  )
}

export default Button;
