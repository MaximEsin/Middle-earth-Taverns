import React from "react";
import styles from "./Header.module.scss";

const Navbar = () => {
  return (
    <section className={styles.header__navbar}>
      <h2 className={styles.header__navbar__item}>About</h2>
      <h2 className={styles.header__navbar__item}>Map</h2>
      <h2 className={styles.header__navbar__item}>Tavern description</h2>
    </section>
  );
};

export default Navbar;
