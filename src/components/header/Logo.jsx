import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../img/logo.svg";

const Logo = () => {
  return (
    <section className={styles.header__logo}>
      <Link to="/">
        <img className={styles.header__logo__icon} src={logo} alt="Logo icon" />
      </Link>
      <Link to="/">
        <h2 className={styles.header__logo__text}>Middle-earth Taverns</h2>
      </Link>
    </section>
  );
};

export default Logo;
