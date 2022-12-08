import React from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <BrowserRouter>
      <header className={styles.header__container}>
        <Logo />
        <Navbar />
      </header>
    </BrowserRouter>
  );
};

export default Header;
