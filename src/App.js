import styles from "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Map from "./components/map/Map";

function App() {
  return (
    <BrowserRouter>
      <main className={styles.wrapper}>
        <Header />
        <About />
        <Map />
      </main>
    </BrowserRouter>
  );
}

export default App;
