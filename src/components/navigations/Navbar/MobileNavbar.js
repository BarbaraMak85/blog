import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as PageLink } from "react-router-dom";

import styles from "./MobileNavbar.module.scss";

import HamburgerMenu from "react-hamburger-menu";

const MobileNavbar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenuVisibility = () =>
    setIsHamburgerMenuOpen((prevState) => !prevState);

  return (
    <nav className={styles.navigationWrapper__mobile}>
      <div className={styles.navigationWrapper__hamburger}>
        <HamburgerMenu
          isOpen={isHamburgerMenuOpen}
          menuClicked={toggleHamburgerMenuVisibility}
          width={25}
          height={18}
          strokeWidth={2}
          rotate={0}
          color="#545454"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>

      {isHamburgerMenuOpen ? (
        <ul className={styles.navigationList__wrapper__moblie}>
          <li className={styles.naviagtionList__element}>
            <PageLink
              activeClass={styles.active}
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </PageLink>
          </li>
          <li className={styles.naviagtionList__element}>
            <Link
              activeClass={styles.active}
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              O mnie
            </Link>
          </li>
          <li className={styles.naviagtionList__element}>
            <Link
              activeClass={styles.active}
              to="article"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Artykuły
            </Link>
          </li>

          <li className={styles.naviagtionList__element}>
            <Link
              activeClass={styles.active}
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default MobileNavbar;
