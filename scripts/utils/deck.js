/*
create deck
shuffle deck
drawCard
etc
*/
let playerHand = [];
let dealerHand = [];

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
      let imageName = `${value.toLowerCase()}_of_${suit.toLowerCase()}.png`;
      deck.push({
        suit: suit,
        value: value,
        image: `assets/cards/${imageName}`,
      });
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
  if (game === "blackjack") {
    let i;
    for (i = 0; i < 2; i++) {
      const firstDraw = deck.pop();
      playerHand.push(firstDraw);
      const secondDraw = deck.pop();
      dealerHand.push(secondDraw);
    }
    return { playerHand, dealerHand, deck };
  }
}

function drawCard(gameState, targetHand) {
  const newCard = gameState.deck.pop();
  gameState[targetHand].push(newCard);
  console.log(`${targetHand} drew:`, newCard);
  console.log(`${targetHand} hand:`, gameState[targetHand]);
  return gameState;
}

/*
function getHandValue(gameState) {
  let playerValue = 0;
  let dealerValue = 0;

  for (let i = 0; i < gameState.playerHand.length; i++) {
    playerValue += gameState.playerHand[i].value;
  }

  for (let i = 0; i < gameState.dealerHand.length; i++) {
    dealerValue += gameState.dealerHand[i].value;
  }

  console.log(playerValue);
  console.log(dealerValue);

  return gameState;
}
*/
export { createDeck, dealGame, drawCard /*, getHandValue */ };
