import React from "react";
import NavbarManager from "../../components/navigations/Navbar/NavbarManager";
import Home from "../../views/Home/Home";
import styles from "./MainPages.module.scss";

import { BrowserRouter } from "react-router-dom";

import Router from "../../routing/Router";
import Footer from "../../views/Footer/Footer";

function MainPages() {
  return (
    <BrowserRouter>
      <div className={styles.mainPages}>
        <NavbarManager pageType="main" />
        <Home />
        <div className={styles.mainPages_second}>
          <Router />
        </div>
        <hr className={styles.mainPages_border} />

        <div className={styles.mainPages_footer}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default MainPages;
