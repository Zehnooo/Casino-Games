import { createDeck, dealGame } from "./utils/deck.js";

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
    dealGame(game, deck);
    console.log("blackjack game started");
  } else {
    console.log("HERRO");
  }
}
