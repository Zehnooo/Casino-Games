import { setGame } from "../main.js";
/*
Dom creation, manipulation, removal, etc.
*/
function createButton(id, text) {
  const btn = document.createElement("button");
  btn.id = id;
  btn.textContent = text;
  return btn;
}

function createCardElement(card) {
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = `${card.value} of ${card.suit}`;
  img.classList.add("card");
  return img;
}

function gameOver(gameName) {
  const gameDisplay = document.querySelector("#display-game");
  gameDisplay.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = gameName.toUpperCase();

  const div = document.createElement("div");

  const gameOverText = document.createElement("p");
  gameOverText.textContent = "GAME OVER";

  const playAgain = createButton("play-again", "PLAY AGAIN");
  playAgain.addEventListener("click", () => {
    setGame(gameName);
  });

  div.append(gameOverText, playAgain);
  gameDisplay.append(header, div);
}

export { createButton, createCardElement, gameOver };
