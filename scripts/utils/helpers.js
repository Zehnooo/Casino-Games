import { buildBlackjackUI } from "../blackjack.js";
import { createDeck, dealGame } from "./deck.js";
import { PlinkoBoundary } from "../plinko.js";

function startGame(game) {
  const gameDisplay = document.querySelector("#display-game");
  gameDisplay.innerHTML = ``;
  if (game === "startBlackJack") {
    game = "blackjack";
    const deck = createDeck();
    const blackJackGame = dealGame(game, deck);
    buildBlackjackUI(gameDisplay, blackJackGame);
    console.log("blackjack game started", blackJackGame.deck);
    console.log(blackJackGame.playerHand);
    console.log(blackJackGame.dealerHand);

  } else if (game === "startPlinko") {
    const plinko = PlinkoBoundary(gameDisplay);
  } else {
    console.log("HERRO");
  }
}

export { startGame };

