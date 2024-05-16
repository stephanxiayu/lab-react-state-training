// src/App.js

import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture
        img1="path/to/first/image.png"
        img2="path/to/second/image.png"
      />
      <Dice />
      <DiscoButton />
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
    </div>
  );
};

export default App;
