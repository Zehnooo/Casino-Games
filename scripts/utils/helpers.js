import { createDeck, dealGame } from "./deck.js";
const gameDisplay = document.querySelector("#display-game");
gameDisplay.innerHTML = ``;
/*
Generic helper functions
get random number
play sound files
format currency
etc
*/

function startGame(game) {
  if (game === "startBlackJack") {
    game = "blackjack";
    const deck = createDeck();
    const blackJackGame = dealGame(game, deck);
    gameDisplay.innerHTML = `
    INSERT EPIC BLACKJACK GAME
      `;
    console.log("blackjack game started", blackJackGame.deck);
    console.log(blackJackGame.playerHand);
    console.log(blackJackGame.dealerHand);
  } else {
    console.log("HERRO");
  }
}

export { startGame };
