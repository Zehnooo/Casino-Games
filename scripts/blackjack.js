import { createButton, createCardElement } from "./utils/domHelpers.js";
import { formatHand } from "./utils/helpers.js";



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

    gameState.dealerHand.forEach(card => {
        const cardImg = createCardElement(card);
        dealerHand.appendChild(cardImg);
    });


    const playerArea = document.createElement("div");
    playerArea.id = "player-area";

    const playerHand = document.createElement("div");
    const playerTag = document.createElement("h3");
    playerTag.textContent = "Player";
    playerHand.classList.add("hand");
    gameState.playerHand.forEach(card => {
        const cardImg = createCardElement(card);
        playerHand.appendChild(cardImg);
    });

    const playerBtns = document.createElement("div");
    playerBtns.classList.add("player-btns");

    const hitBtn = createButton("hit", "Hit");
    const standBtn = createButton("stand", "stand");

    playerArea.prepend(playerTag);
    dealerArea.prepend(dealerTag);
    dealerArea.append(dealerHand);
    playerBtns.append(hitBtn, standBtn);
    playerArea.append(playerHand, playerBtns);
    gameArea.append(dealerArea, playerArea);
    container.append(header, gameArea);

}

export { buildBlackjackUI };