import {
  createButton,
  createCardElement,
  gameOver,
} from "./utils/domHelpers.js";
import { drawCard /*, getHandValue */ } from "./utils/deck.js";

function buildBlackjackUI(container, gameState) {
  const header = document.createElement("h2");
  header.textContent = "BLACKJACK";

  const gameArea = document.createElement("div");
  gameArea.id = "game-area";

  const dealerArea = document.createElement("div");
  dealerArea.id = "dealer-area";

  const dealerHand = document.createElement("div");
  const dealerTag = document.createElement("h3");

  dealerHand.classList.add("hand");

  for (let i = 0; i < gameState.dealerHand.length; i++) {
    const card = gameState.dealerHand[i];
    const cardImg = createCardElement(card);
    if (i > 0) {
      cardImg.classList.add("flipped");
    }
    dealerHand.appendChild(cardImg);
  }
  dealerTag.textContent = "Dealer";

  const playerArea = document.createElement("div");
  playerArea.id = "player-area";

  const playerHand = document.createElement("div");
  const playerTag = document.createElement("h3");

  playerHand.classList.add("hand");

  for (let i = 0; i < gameState.playerHand.length; i++) {
    const card = gameState.playerHand[i];
    console.log(gameState.playerHand[i].value);
    const cardImg = createCardElement(card);
    playerHand.appendChild(cardImg);
  }

  const playerBtns = document.createElement("div");
  playerBtns.classList.add("player-btns");

  const hitBtn = createButton("hit", "Hit");
  hitBtn.addEventListener("click", () => {
    playerHit(gameState, playerTag, playerHand);
  });

  const standBtn = createButton("stand", "Stand");
  standBtn.addEventListener("click", () => {
    const faceDownCard = dealerHand.querySelector(".flipped");
    faceDownCard.classList.remove("flipped");
    dealerTag.textContent = "Dealer (" + dealerHandValue + ")";
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

function calculateBlackjackHandValue(hand) {
  let total = 0;
  let aceCount = 0;

  for (const card of hand) {
    const value = getBlackJackValue(card);
    total += value;
    if (card.value === "Ace") aceCount++;
  }

  while (total > 21 && aceCount > 0) {
    total -= 10;
    aceCount--;
  }

  return total;
}

function playerHit(gameState, playerTag, playerHand) {
  drawCard(gameState, "playerHand");
  const newCard = gameState.playerHand[gameState.playerHand.length - 1];
  const cardImg = createCardElement(newCard);
  playerHand.appendChild(cardImg);
  const handValue = calculateBlackjackHandValue(gameState.playerHand);
  if (handValue > 21) {
    alert("Player BUSTED EVERYWHERE", handValue);
    gameOver("blackjack");
  }
  playerTag.textContent = "Player (" + handValue + ")";
}

export { buildBlackjackUI };
