// src/components/Dice.js
import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [dice, setDice] = useState(dice3);

  const rollDice = () => {
    setDice(diceEmpty);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDice(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <img
      src={dice}
      alt="dice"
      onClick={rollDice}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Dice;
