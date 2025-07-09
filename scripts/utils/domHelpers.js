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

function gameOver(game) {
  const gameDisplay = document.querySelector("#display-game");
  gameDisplay.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = game.id;

  const div = document.createElement("div");

  const gameOver = document.createElement("p");
  gameOver.textContent = "GAME OVER";

  const playAgain = document.createElement("button");
  playAgain.textContent = "PLAY AGAIN?";
  playAgain.addEventListener("click", (game) => {
    setGame(game.id);
  });
}

export { createButton, createCardElement, gameOver };
