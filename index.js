import { superMario, avengers, defaultDeck } from "./card_decks.js";

let cards = superMario;
const shuffledArray = shuffleCards(cards);
const cardList = document.querySelectorAll("section>div");
const cardListArr = Array.from(cardList);
const selectInput = document.querySelector("select");

let turnCounter = 0;
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
function shuffleCards(cards) {
  let numCards = cards.length;
  let shuffledArr = [];

  //Puts one of each card in a random location
  cards.map((card) => {
    let index = Math.floor(Math.random() * numCards * 2);
    if (!shuffledArr[index]) {
      shuffledArr[index] = card;
    } else {
      while (shuffledArr[index]) {
        index = Math.floor(Math.random() * numCards * 2);
      } //Ensures no overwrite
      shuffledArr[index] = card;
    }
  });

  //Puts a second of each card in a random location
  cards.map((card) => {
    let index = Math.floor(Math.random() * numCards * 2);
    if (!shuffledArr[index]) {
      shuffledArr[index] = card;
    } else {
      while (shuffledArr[index]) {
        index = Math.floor(Math.random() * numCards * 2);
      }
      shuffledArr[index] = card;
    }
  });

  return shuffledArr;
}
console.log(shuffledArray);

//Checks two flipped cards to see if they're a match
// function checkMatch(e) {
//   let firstCardIndex = cardListArr.findIndex((card) => {
//     return card.classList.contains("front");
//   });
//   let firstCard = shuffledArray[firstCardIndex];

//   let secondCardIndex =
//     11 -
//     cardListArr.reverse().findIndex((card) => {
//       return card.classList.contains("front");
//     });

//   let secondCard = shuffledArray[secondCardIndex];
//   console.log(`first card: ${firstCard.id}`);
//   console.log(`second card: ${secondCard.id}`);
//   console.log(firstCardIndex);
//   console.log(secondCardIndex);

//   //If matched, keep face up. Otherwise, flip back facedown
//   if (firstCard.id === secondCard.id) {
//     cardListArr.forEach((card) => {
//       if (card.classList.contains("front")) {
//         card.classList.remove();
//         card.classList.add("match");
//         console.log("match");
//       }
//     });
//   } else {
//     cardListArr.forEach((card) => {
//       if (card.classList.contains("front")) {
//         card.classList.remove();
//         card.classList.add("back");
//         card.removeAttribute("style");
//         console.log("not a match");
//       }
//     });
//   }

//   turnCount++;
// }

function checkMatch() {
  let firstCardIndex = cardListArr.findIndex((card) => {
    return card.className === "front";
  });
  let firstCard = shuffledArray[firstCardIndex];

  let reverseArr = cardListArr.reverse();
  let secondCardIndex =
    11 -
    reverseArr.findIndex((card) => {
      console.log(card.className);
      return card.className === "front";
    });
  let secondCard = shuffledArray[secondCardIndex];

  console.log(secondCardIndex);
  console.log(secondCard);

  if (firstCard.id === secondCard.id) {
    console.log("MATCH");
    cardListArr.forEach((card) => {
      if (card.classList.contains("front")) {
        card.classList.remove("front");
        card.classList.add("match");
      }
    });
  } else {
    console.log("NOPE");
    setTimeout(() => {
      cardListArr.forEach((card) => {
        if (card.classList.contains("front")) {
          card.classList.remove("front");
          card.classList.add("back");
          card.removeAttribute("style");
        }
      });
    }, 5000);
  }

  turnCounter++;
}

function compareCardsInitMatch() {
  let cardsFlipped = cardListArr.filter((card) => {
    return card.className === "front";
  });

  if (cardsFlipped.length === 2) {
    checkMatch();
  }
}
// Flip cards and add the id and source image to the html element and background
function flipCard(e) {
  console.log(e);
  e.target.classList.remove();
  e.target.className = "front";

  let index = e.srcElement.id;
  let thisCard = shuffledArray[index];

  e.target.style.backgroundImage = thisCard.image;
  console.log(e);

  compareCardsInitMatch();
}

//Creates a shuffled array containing two of each card

//console.log(shuffleCards(cards));
selectInput.addEventListener("change", changeTheme);

cardListArr.forEach((card) => {
  card.addEventListener("click", flipCard);
});
