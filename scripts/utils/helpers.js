import { createDeck, dealGame } from "./deck.js";

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

    console.log("blackjack game started", blackJackGame.deck);
    console.log(blackJackGame.playerHand);
    console.log(blackJackGame.dealerHand);
  } else {
    console.log("HERRO");
  }
}

export { startGame };
