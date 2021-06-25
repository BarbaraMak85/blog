import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

const NavbarManager = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  console.log(isMobile);

  return <div>{isMobile ? <MobileNavbar /> : <Navbar />}</div>;
};

export default NavbarManager;
