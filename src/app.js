import "./styles.css";

const generateRandomCard = () => {
  const suits = ["hearts", "spades", "diamonds", "clubs"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const suitSymbols = {
    hearts: "♥",
    spades: "♠",
    diamonds: "♦",
    clubs: "♣"
  };

  document.getElementById("top-suit").textContent = suitSymbols[randomSuit];
  document.getElementById("bottom-suit").textContent = suitSymbols[randomSuit];
  document.getElementById("card-value").textContent = randomValue;

  document.getElementById("top-suit").className = `top-suit ${randomSuit}`;
  document.getElementById(
    "bottom-suit"
  ).className = `bottom-suit ${randomSuit}`;
  document.getElementById("card-value").className = `card-value ${randomSuit}`;
};

document
  .getElementById("new-card-btn")
  .addEventListener("click", generateRandomCard);

setInterval(generateRandomCard, 5000);

window.onload = generateRandomCard;
