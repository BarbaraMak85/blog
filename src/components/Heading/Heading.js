import React from "react";
import styles from "./Heading.module.scss";
function Heading() {
  return (
    <div className={styles.headingWrapper}>
      <h1 className={styles.headingWrapper_title}>Tytuł pierwszego posta</h1>
      <hr className={styles.headingWrapper_border} />
      <p className={styles.headingWrapper_paragraph}>
        Wstępny tekst zachętający do dalszego czytania posta
      </p>
    </div>
  );
}

export default Heading;
