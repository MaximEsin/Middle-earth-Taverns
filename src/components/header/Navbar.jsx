import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Navbar = () => {
  return (
    <section className={styles.header__navbar}>
      <Link to="/#About-section">
        <h2 className={styles.header__navbar__item}>About</h2>
      </Link>
      <Link to="/#Map-section">
        <h2 className={styles.header__navbar__item}>Map</h2>
      </Link>
      <Link to="/#Description-section">
        <h2 className={styles.header__navbar__item}>Tavern description</h2>
      </Link>
    </section>
  );
};

export default Navbar;
