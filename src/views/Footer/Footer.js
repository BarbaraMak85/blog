import React from "react";

import Subscribe from "../../components/Subscribe/Subscribe";
import Titles from "../../components/Titles/Titles";
import styles from "./Footer.module.scss";
import Logo from "../../assets/icons/logo.png";
import List from "../../components/List/List";
function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerWrapper_details}>
        <img className={styles.footerWrapper_images} src={Logo} />
        <p className={styles.footerWrapper_paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          architecto vero saepe, consequuntur in ut, quod reprehenderit est quis
          eius cumque excepturi, facere maxime itaque alias illum aut magnam
          dolores!
        </p>
      </div>
      <div className={styles.footerWrapper_categories}>
        <Titles>Kategorie</Titles>
        <List>Fizyka kwantowa</List>
        <List>Metody Silvy</List>
        <List>Metoda dwupunktu</List>
        <List>Medytacje</List>
      </div>
      <div className={styles.footerWrapper_icons}>
        <Titles>Subscribe & Follow</Titles>
        <Subscribe />
      </div>
    </div>
  );
}

export default Footer;
