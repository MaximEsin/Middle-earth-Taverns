import React from "react";
import Ring from "../../img/ring.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer__wrapper}>
      <section className={styles.footer__container}>
        <img src={Ring} alt="Icon of ring" />
        <p className={styles.footer__dev}>M & N dev</p>
      </section>
    </section>
  );
};

export default Footer;
