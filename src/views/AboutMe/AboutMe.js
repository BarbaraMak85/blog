import React, { useState, useEffect, useRef } from "react";
import List from "../../components/List/List";
import Subscribe from "../../components/Subscribe/Subscribe";
import Titles from "../../components/Titles/Titles";
import Me from "../../assets/images/pexels-lukas-medvedevas-6013664.jpg";
import styles from "./AboutMe.module.scss";

import { useLocation } from "react-router-dom";

function AboutMe() {
  const location = useLocation();

  const aboutRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      if (id === "about") {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className={styles.aboutMeWrapper} ref={aboutRef}>
      <div className={styles.aboutMeWrapper_me}>
        <p className={styles.aboutMeWrapper_title}>O mnie</p>
        <div className={styles.aboutMeWrapper_line}></div>
        <div>
          <img className={styles.aboutMeWrapper_image} src={Me} />
        </div>

        <p className={styles.aboutMeWrapper_paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          asperiores quos earum pariatur expedita deleniti natus dolores
          voluptate fugiat repudiandae amet quisquam accusantium eveniet aliquam
          magnam praesentium consectetur, at corporis?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Non consectetur eos dolorem
          reprehenderit, dolore iste quasi recusandae molestias libero eum
          dignissimos autem obcaecati aliquam molestiae cupiditate nesciunt
          explicabo consequatur facilis.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
