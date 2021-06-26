import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navigationWrapper}>
      <ul className={styles.navigationWrapper_list}>
        <RouterLink className={styles.navigationWrapper_element} to="/">
          <li>HOME</li>
        </RouterLink>
        <RouterLink className={styles.navigationWrapper_element} to="/#about">
          <li>O MNIE</li>
        </RouterLink>
        <Link
          className={styles.navigationWrapper_element}
          to="article"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li>ARTYKUŁY</li>
        </Link>

        <li>
          <RouterLink
            className={styles.navigationWrapper_element}
            to="/#contact"
          >
            KONTAKT
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
