import { superMario, avengers, defaultDeck } from "./card_decks.js";

let cards = superMario;
const shuffledArray = shuffleCards(cards);
const cardList = document.querySelectorAll("section>div");
const cardListArr = Array.from(cardList);
let turnCounter = 0;
const bestScore = [];

const selectInput = document.querySelector("select");

console.log(shuffledArray);

/*
    FUNCTIONS
*/
//Creates a shuffled array containing two of each card
function shuffleCards(cards) {
    let numCards = cards.length;
  let shuffleArray = [];

    //Puts one of each card in a random location
    cards.map((card) => {
    let index = Math.floor(Math.random() * numCards * 2);
    if (!shuffleArray[index]) {
      shuffleArray[index] = card;
        } else {
      while (shuffleArray[index]) {
        index = Math.floor(Math.random() * numCards * 2);
            } //Ensures no overwrite
      shuffleArray[index] = card;
        }
    });
    
    //Puts a second of each card in a random location
    cards.map((card) => {
    let index = Math.floor(Math.random() * numCards * 2);
    if (!shuffleArray[index]) {
      shuffleArray[index] = card;
        } else {
      while (shuffleArray[index]) {
        index = Math.floor(Math.random() * numCards * 2);
            }
      shuffleArray[index] = card;
        }
    });
    
  return shuffleArray;
}


//Toggles to show card face
function flipCard(e) {
  console.log(e);
  e.target.classList.remove();
  e.target.className = "front"
    
  let index = e.srcElement.id;
  let thisCard = shuffledArray[index];

  e.target.style.backgroundimage = thisCard.image;

  compareCardsInitMatch();
}

function compareCardsInitMatch() {
  let cardsFlipped = cardListArr.filter((card) => {
    return card.className === 'front';
  }
  );

  if (cardsFlipped.length === 2) {
    checkMatch();
  }
}

//Checks two flipped cards to see if they're a match
function checkMatch() {
  let firstCardIndex = cardListArr.findIndex((card) => {
    return card.className === 'front';
  });
  let firstCard = shuffledArray[firstCardIndex];

  let reverseArr = cardListArr.reverse();
  let secondCardIndex = 11 - reverseArr.findIndex((card) => {
    console.log(card.className);
    return card.className === 'front'
  });
  let secondCard = shuffledArray[secondCardIndex];

  console.log(secondCardIndex);
  console.log(secondCard);

  if (firstCard.id === secondCard.id) {
    console.log("MATCH");
    cardListArr.forEach((card) => {
      if (card.classList.contains('front')) {
        card.classList.remove('front');
        card.classList.add('match');
      }
    })
  } else {
    console.log("NOPE");
    setTimeout(() => {
      cardListArr.forEach((card) => {
        if (card.classList.contains('front')) {
          card.classList.remove('front');
          card.classList.add('back');
          card.removeAttribute('style');
        }
      })}, 5000);
  }

  turnCounter++;
}



//Changes card face and back color based on selected theme
function chooseTheme(input) {
  let choice = input.selectedIndex;
  //Mario
  if (choice === 1) {
    cardListArr.map((card) => {
      card.style.backgroundColor = "red";
      cards = superMario;
    })
  } //Avengers
  else if (choice === 2) {
    cardListArr.map((card) => {
      card.style.backgroundColor = "blue";
      cards = avengers;
    })
  } //Default
  else {
    cardListArr.map((card) => {
      card.style.backgroundColor = "purple";
      cards = defaultDeck;
    })
  }

  return shuffleCards(cards);
}

/* 
    EVENT LISTENERS
*/
//Choose Theme on dropdown change
selectInput.addEventListener('change', chooseTheme);

//Flip Card on click
cardListArr.forEach((card) => {
  card.addEventListener('click', flipCard);
});
