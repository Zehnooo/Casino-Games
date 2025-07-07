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
      gameDisplay.innerHTML = `
        <button id="startBlackJack" class="play-game">Start Game</button>
          `;
      break;
    case "plinko":
      `
        <button id="startPlinko" class="play-game">Start Game</button>
          `;
      break;
    case "war":
      `
        <button id="startWar" class="play-game">Start Game</button>
          `;
      break;
    default:
      gameDisplay.innerHTML = `
        <h1 class="default">Please choose a game to begin</h1>      
          `;
  }
  const startGameBtn = gameDisplay.querySelector(".play-game");
  startGameBtn.addEventListener("click", () => {
    const game = startGameBtn.id;

    // startGameBtn(game);
  });
}

createPlayNow();

import { createDeck } from "./utils/deck.js";

let deck = createDeck();
console.log("New Deck", deck);
