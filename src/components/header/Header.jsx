import React from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = ({ about, map, TavernDescription, func }) => {
  return (
    <section className={styles.header__wrapper}>
      <header className={styles.header__container}>
        <Logo />
        <Navbar
          about={about}
          map={map}
          TavernDescription={TavernDescription}
          func={func}
        />
      </header>
    </section>
  );
};

export default Header;
