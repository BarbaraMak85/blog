import React from "react";
import Logo from "../../assets/icons/logo.png";
// import LightBulb from "../../assets/images/close-up-idea-concept.jpg";
import Heading from "../../components/Heading/Heading";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeWrapper}>
        <img className={styles.homeWrapper_images} src={Logo} />
        <h1 className={styles.homeWrapper_heading}>Aktywny umysł</h1>
      </div>

      <div className={styles.homeWrapper_light_bulb}>
        <Heading />
      </div>
    </div>
  );
};

export default Home;
