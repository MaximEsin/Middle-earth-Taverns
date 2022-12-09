import React from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.header__container}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
