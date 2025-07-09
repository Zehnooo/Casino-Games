import { createButton, createCardElement } from "./utils/domHelpers.js";
import { drawCard /*, getHandValue */ } from "./utils/deck.js";

function buildBlackjackUI(container, gameState) {
  const header = document.createElement("h2");
  header.textContent = "Blackjack";

  const gameArea = document.createElement("div");
  gameArea.id = "game-area";

  const dealerArea = document.createElement("div");
  dealerArea.id = "dealer-area";

  const dealerHand = document.createElement("div");
  const dealerTag = document.createElement("h3");
  dealerTag.textContent = "Dealer";
  dealerHand.classList.add("hand");

  for (let i = 0; i < gameState.dealerHand.length; i++) {
    const card = gameState.dealerHand[i];
    const cardImg = createCardElement(card);
    if (i > 0) {
      cardImg.classList.add("flipped");
    }
    dealerHand.appendChild(cardImg);
  }
  let dealerHandValue = gameState.dealerHand.reduce((total, card) => {
    return total + getBlackJackValue(card);
  }, 0);
  console.log(dealerHandValue);
  const playerArea = document.createElement("div");
  playerArea.id = "player-area";

  const playerHand = document.createElement("div");
  const playerTag = document.createElement("h3");
  playerTag.textContent = "Player";
  playerHand.classList.add("hand");

  for (let i = 0; i < gameState.playerHand.length; i++) {
    const card = gameState.playerHand[i];
    console.log(gameState.playerHand[i].value);
    const cardImg = createCardElement(card);
    playerHand.appendChild(cardImg);
  }
  let playerHandValue = gameState.playerHand.reduce((total, card) => {
    return total + getBlackJackValue(card);
  }, 0);
  console.log(playerHandValue);
  const playerBtns = document.createElement("div");
  playerBtns.classList.add("player-btns");

  const hitBtn = createButton("hit", "Hit");
  hitBtn.addEventListener("click", () => {
    drawCard(gameState, "playerHand");
    const newCard = gameState.playerHand[gameState.playerHand.length - 1];
    const cardImg = createCardElement(newCard);
    playerHand.appendChild(cardImg);
    playerHandValue += getBlackJackValue(newCard);
    console.log(playerHandValue);
  });

  const standBtn = createButton("stand", "Stand");
  standBtn.addEventListener("click", () => {
    const faceDownCard = dealerHand.querySelector(".flipped");
    faceDownCard.classList.remove("flipped");
  });

  playerArea.prepend(playerTag);
  dealerArea.prepend(dealerTag);
  dealerArea.append(dealerHand);
  playerBtns.append(hitBtn, standBtn);
  playerArea.append(playerHand, playerBtns);
  gameArea.append(dealerArea, playerArea);
  container.append(header, gameArea);
}

function getBlackJackValue(card) {
  if (["Jack", "Queen", "King"].includes(card.value)) {
    return 10;
  } else if (card.value === "Ace") {
    return 11;
  } else {
    return parseInt(card.value);
  }
}

export { buildBlackjackUI };
