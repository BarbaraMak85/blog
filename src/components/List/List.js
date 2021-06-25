import React from "react";
import styles from "./List.module.scss";

function List({ children }) {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.list_dot}>
          <span className={styles.list_text}>{children}</span>
        </li>
      </ul>
    </div>
  );
}

export default List;
