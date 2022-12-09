import React from "react";
import styles from "./Header.module.scss";

const Navbar = ({ about, map, TavernDescription, func }) => {
  return (
    <nav className={styles.header__navbar}>
      <h2 onClick={() => func(about)} className={styles.header__navbar__item}>
        About
      </h2>
      <h2 onClick={() => func(map)} className={styles.header__navbar__item}>
        Map
      </h2>
      <h2
        onClick={() => func(TavernDescription)}
        className={styles.header__navbar__item}
      >
        Tavern description
      </h2>
    </nav>
  );
};

export default Navbar;
