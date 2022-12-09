import React from "react";
import MapLotr from "../../img/map.jpeg";
import styles from "./Map.module.scss";
import LegendItem from "./LegendItem";
import green from "../../img/green.svg";
import orange from "../../img/orange.svg";
import purple from "../../img/purple.svg";
import red from "../../img/red.svg";
import yellow from "../../img/yellow.svg";

const Map = ({ map }) => {
  let classNames = require("classnames");
  const Races = {
    h: "Humans",
    d: "Dwarves",
    e: "Elves",
    o: "Orcs",
    ho: "Hobbits",
  };

  return (
    <section className={styles.map__wrapper}>
      <section ref={map} className={styles.map__section}>
        <section className={styles.map__img}>
          <img src={MapLotr} alt="Map of middle-earth" />
          <img
            className={classNames(styles.prancingPony, styles.point)}
            width={10}
            height={10}
            src={orange}
            alt="point"
          />
          <img
            className={classNames(styles.keenEye, styles.point)}
            width={10}
            height={10}
            src={orange}
            alt="point"
          />
          <img
            className={classNames(styles.drunkenMine, styles.point)}
            width={10}
            height={10}
            src={purple}
            alt="point"
          />
          <img
            className={classNames(styles.greyThunder, styles.point)}
            width={10}
            height={10}
            src={purple}
            alt="point"
          />
          <img
            className={classNames(styles.goldenLeaf, styles.point)}
            width={10}
            height={10}
            src={green}
            alt="point"
          />
          <img
            className={classNames(styles.brightStar, styles.point)}
            width={10}
            height={10}
            src={green}
            alt="point"
          />
          <img
            className={classNames(styles.cruelGoblin, styles.point)}
            width={10}
            height={10}
            src={red}
            alt="point"
          />
          <img
            className={classNames(styles.laughingWarg, styles.point)}
            width={10}
            height={10}
            src={red}
            alt="point"
          />
          <img
            className={classNames(styles.greenDragon, styles.point)}
            width={10}
            height={10}
            src={yellow}
            alt="point"
          />
          <img
            className={classNames(styles.happyPig, styles.point)}
            width={10}
            height={10}
            src={yellow}
            alt="point"
          />
        </section>
        <aside className={styles.map__aside}>
          <h2 className={styles.map__legend__title}>Legend</h2>
          <LegendItem name={Races.h} icon={orange} />
          <LegendItem name={Races.d} icon={purple} />
          <LegendItem name={Races.e} icon={green} />
          <LegendItem name={Races.o} icon={red} />
          <LegendItem name={Races.ho} icon={yellow} />
        </aside>
      </section>
    </section>
  );
};

export default Map;
