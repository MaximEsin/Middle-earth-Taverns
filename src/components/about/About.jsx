import React from "react";
import styles from "./About.module.scss";

const About = ({ about }) => {
  return (
    <section ref={about} className={styles.about__wrapper}>
      <section className={styles.about__section}>
        <h1 className={styles.about__title}>
          Discover all best taverns in one app
        </h1>
        <h2 className={styles.about__text}>
          All top rated middle-earth taverns can be found on our map. You simply
          need to click on a tavern on a map to immediately get detailed
          information about it.
        </h2>
        <h2 className={styles.about__text}>Try it now</h2>
      </section>
    </section>
  );
};

export default About;
