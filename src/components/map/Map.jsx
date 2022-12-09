import React from "react";
import map from "../../img/map.jpeg";
import styles from "./Map.module.scss";

const Map = () => {
  return (
    <section className={styles.Map__section}>
      <section>
        <img src={map} alt="Map of middle-earth" />
      </section>
      <aside></aside>
    </section>
  );
};

export default Map;
