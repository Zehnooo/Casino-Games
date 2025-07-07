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

export { createDeck, shuffleDeck };
