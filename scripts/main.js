function createPlayNow() {
  const gameSelection = document.querySelector(".select-game");
  const games = gameSelection.querySelectorAll(".game");
  for (const game of games) {
    const playNowBtn = document.createElement("button");
    playNowBtn.textContent = "PLAY NOW";
    playNowBtn.addEventListener("click", () => {
      setGame(game.id);
    });
    game.appendChild(playNowBtn);
  }
}

function setGame(game) {
  const gameDisplay = document.querySelector("#display-game");
  gameDisplay.innerHTML = "";
  switch (game) {
    case "blackjack":
      gameDisplay.innerHTML = game;
      break;
    case "plinko":
      gameDisplay.innerHTML = game;
      break;
    case "war":
      gameDisplay.innerHTML = game;
      break;
    default:
      gameDisplay.innerHTML = `
        <h1 class="default">Please choose a game to begin</h1>      
          `;
  }
}

createPlayNow();

import { createDeck } from "./utils/deck.js";

let deck = createDeck();
console.log("New Deck", deck);
