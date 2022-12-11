import React, { useRef, useState } from "react";
import styles from "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Map from "./components/map/Map";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";

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

  let taverns = [
    {
      title: "Prancing Pony",
      desc: "This is the most famous tavern of the west. Good food and fresh beverages are always waiting for customers as well as  prepared beds and rooms",
      rat: 5,
    },
    {
      title: "Keen Eye",
      desc: "This is a very comfortable and relaxing tavern where anyone can find what he is looking for. Near the tavern horses can be bought for a very cheap price",
      rat: 5,
    },
    {
      title: "Drunken Mine",
      desc: "The most famous tavern of the dwarves. Huge amount of meet and potatoes in every dish will satisfy anyone.",
      rat: 5,
    },
    {
      title: "Grey Thunder",
      desc: "This tavern was build in the second age, it has very deep roots and a long history. Singers every day!",
      rat: 5,
    },
    {
      title: "Golden leaf",
      desc: "This is the best elven tavern that can be found in middle-earth. Miruvor here is amazing, thou it is vary hard to get in.",
      rat: 5,
    },
    {
      title: "Bright Star",
      desc: "Rivendel is known for the wisdom it keeps. While staying in this tavern anyone can learn many new things.",
      rat: 5,
    },
    {
      title: "Cruel Goblin",
      desc: "This is the only goblin tavern where a man can stay and sleep not being aware that he will be killed",
      rat: 1.5,
    },
    {
      title: "Laughing warg",
      desc: "Will you really go to mordor to rest?",
      rat: 0,
    },
    {
      title: "Green Dragon",
      desc: "This is a very lovely and hearty tavern hosted by hobbits. Plenty of food and drinks come together with nice beds, but small for men",
      rat: 5,
    },
    {
      title: "Happy Pig",
      desc: "This tavern is known for the loud atmosphere and good food. It is very unlikely that one will not enjoy spending night in there.",
      rat: 5,
    },
  ];

  let [tavern, setTavern] = useState("");

  const makeTavern1 = () => {
    setTavern((tavern = taverns[0]));
  };

  const makeTavern2 = () => {
    setTavern((tavern = taverns[1]));
  };
  const makeTavern3 = () => {
    setTavern((tavern = taverns[2]));
  };
  const makeTavern4 = () => {
    setTavern((tavern = taverns[3]));
  };
  const makeTavern5 = () => {
    setTavern((tavern = taverns[4]));
  };
  const makeTavern6 = () => {
    setTavern((tavern = taverns[5]));
  };
  const makeTavern7 = () => {
    setTavern((tavern = taverns[6]));
  };
  const makeTavern8 = () => {
    setTavern((tavern = taverns[7]));
  };
  const makeTavern9 = () => {
    setTavern((tavern = taverns[8]));
  };
  const makeTavern10 = () => {
    setTavern((tavern = taverns[9]));
  };
  console.log(tavern);

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
        <Map
          map={map}
          makeTavern1={makeTavern1}
          makeTavern2={makeTavern2}
          makeTavern3={makeTavern3}
          makeTavern4={makeTavern4}
          makeTavern5={makeTavern5}
          makeTavern6={makeTavern6}
          makeTavern7={makeTavern7}
          makeTavern8={makeTavern8}
          makeTavern9={makeTavern9}
          makeTavern10={makeTavern10}
        />
        <Description TavernDescription={TavernDescription} tavern={tavern} />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
