import { createButton } from "./utils/domHelpers.js";
import { formatHand } from "./utils/helpers.js";



function buildBlackjackUI(container, gameState) {
    const header = document.createElement("h2");
    header.textContent = "Blackjack";

    const gameArea = document.createElement("div");
    gameArea.id = "game-area";

    const dealerArea = document.createElement("div");
    dealerArea.id = "dealer-area";
    const dealerHand = document.createElement("div");
    dealerHand.textContent = "Dealer's Hand: " + formatHand(gameState.dealerHand);

    dealerArea.append(dealerHand);



    const playerArea = document.createElement("div");
    playerArea.id = "player-area";

    const hitBtn = createButton("hit", "Hit");
    const standBtn = createButton("stand", "stand");


    playerArea.append(hitBtn, standBtn);
    gameArea.append(dealerArea, playerArea);
    container.append(header, gameArea);

}

export { buildBlackjackUI };