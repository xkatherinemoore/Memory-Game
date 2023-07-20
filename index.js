import { superMario, avengers, defaultDeck } from "./card_decks.js";

let cards = superMario;
const shuffledArray = shuffleCards(cards);
console.log(shuffledArray);

const cardList = document.querySelectorAll("section>div");
const cardListArr = Array.from(cardList);

const selectInput = document.querySelector("select");

// Change the theme of the card deck
function changeTheme() {
  // Mario
  if (selectInput.selectedIndex === 1) {
    for (let card of cardListArr) {
      card.style.backgroundColor = "red";
    }
  } else {
    // Avengers
    for (let card of cardListArr) {
      card.style.backgroundColor = "blue";
    }
  }
}

function flipCard(e) {
  console.log(e);
  e.target.classList.remove();
  e.target.className = "front";

  let index = e.srcElement.id;
  let thisCard = shuffledArray[index];

  e.target.style.backgroundImage = thisCard.image;
}

//Creates a shuffled array containing two of each card
function shuffleCards(cards) {
  let numCards = cards.length;
  let shuffledArray = [];

  //Puts one of each card in a random location
  cards.map((card) => {
    let index = Math.floor(Math.random() * numCards * 2);
    if (!shuffledArray[index]) {
      shuffledArray[index] = card;
    } else {
      while (shuffledArray[index]) {
        index = Math.floor(Math.random() * numCards * 2);
      } //Ensures no overwrite
      shuffledArray[index] = card;
    }
  });

  //Puts a second of each card in a random location
  cards.map((card) => {
    let index = Math.floor(Math.random() * numCards * 2);
    if (!shuffledArray[index]) {
      shuffledArray[index] = card;
    } else {
      while (shuffledArray[index]) {
        index = Math.floor(Math.random() * numCards * 2);
      }
      shuffledArray[index] = card;
    }
  });

  return shuffledArray;
}

//console.log(shuffleCards(cards));
selectInput.addEventListener("change", changeTheme);

cardListArr.forEach((card) => {
  card.addEventListener("click", flipCard);
});
