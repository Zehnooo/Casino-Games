/*
create deck
shuffle deck
drawCard
etc
*/

function createDeck() {
  let deck = [];
  const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit: suit, value: value });
    }
  }
  shuffleDeck(deck);
  return deck;
}

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let shuffle = Math.floor(Math.random() * deck.length);
    [deck[i], deck[shuffle]] = [deck[shuffle], deck[i]];
  }
  return deck;
}

function dealGame(game, deck) {
  /* BlackJack dealing
    dealer deals starting with the player
    one card face up to player
    one card face down to dealer
    one card face up to player
    one card face up to dealer
    */
  if (game === "blackjack") {
    playerHand = [];
    dealerHand = [];
    for (i = 0; i < 2; i++) {
      const firstDraw = deck.pop();
      playerHand.push(firstDraw);
      const secondDraw = deck.pop();
      dealerHand.push(secondDraw);
    }
  }
}

export { createDeck, dealGame };
