import React from "react";
import styles from "./Description.module.scss";

const Description = ({ TavernDescription, tavern }) => {
  return (
    <section className={styles.description__wrapper}>
      <section ref={TavernDescription} className={styles.description__section}>
        <h2 className={styles.description__title}>{tavern.title}</h2>
        <section className={styles.description__body}>
          <h3 className={styles.description__body__main}>{tavern.desc}</h3>
          <h3 className={styles.description__body__aside}>
            Rating {tavern.rat}/5
          </h3>
        </section>
      </section>
    </section>
  );
};

export default Description;
