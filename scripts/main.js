function createPlayNow() {
  const gameSelection = document.querySelector(".select-game");
  const games = gameSelection.querySelectorAll("div");
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
  const gameDisplay = document.querySelector("#game-container");
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
      console.log("no game chosen yet");
  }
}

createPlayNow();
