import React from "react";
import styles from "./Button.module.scss";
function Button({ children }) {
  return (
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  );
}

export default Button;
