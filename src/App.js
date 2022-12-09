import React, { useRef } from "react";
import styles from "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Map from "./components/map/Map";

function App() {
  const about = useRef(null);
  const map = useRef(null);
  const TavernDescription = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <BrowserRouter>
      <main className={styles.wrapper}>
        <Header
          about={about}
          map={map}
          TavernDescription={TavernDescription}
          func={scrollToSection}
        />
        <About about={about} />
        <Map map={map} />
      </main>
    </BrowserRouter>
  );
}

export default App;
