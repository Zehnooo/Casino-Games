import { startGame } from "./utils/helpers.js";

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
      gameDisplay.innerHTML = `
        <button id="startPlinko" class="play-game">Start Game</button>
          `;
      break;
    case "war":
      gameDisplay.innerHTML = `
        <button id="startWar" class="play-game">Start Game</button>
          `;

      break;
    default:
      gameDisplay.innerHTML = `
        <h1 class="default">Please choose a game to begin</h1>      
          `;
  }
  let startGameBtn = gameDisplay.querySelector(".play-game");

  startGameBtn.addEventListener("click", () => {
    console.log(startGameBtn.id);
    const game = startGameBtn.id;
    startGame(game);
  });
}

function gameOver(game) {
  const gameDisplay = document.querySelector("#display-game");
  gameDisplay.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = game;

  const div = document.createElement("div");

  const gameOver = document.createElement("p");
  gameOver.textContent = "GAME OVER";

  const playAgain = document.createElement("button");
  playAgain.textContent = "PLAY AGAIN?";
  playAgain.addEventListener("click", () => {});
}

createPlayNow();
