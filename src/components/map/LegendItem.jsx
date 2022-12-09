import React from "react";
import styles from "./Map.module.scss";

const LegendItem = ({ name, icon }) => {
  return (
    <section className={styles.legendItem__section}>
      <img src={icon} alt="Icon" />
      <p className={styles.legendItem__text}>{name}</p>
    </section>
  );
};

export default LegendItem;
