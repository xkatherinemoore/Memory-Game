import {superMario, avengers, defaultDeck} from 'card_decks.js';


let cards = defaultDeck;
const shuffledArray = shuffleCards(cards);
const cardList = document.querySelectorAll("section>div");
const cardListArr = Array.from(cardList);

const selectInput = document.querySelector("select");

selectInput.addEventListener("change", function () {
  console.log(selectInput.selectedIndex);
});

cardListArr.map(function (card) {
  card.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "green";
  });
});

/*
    FUNCTIONS
*/
//Creates a shuffled array containing two of each card
function shuffleCards(cards) {
    let numCards = cards.length;
    let shuffledArray = [];

    //Puts one of each card in a random location
    cards.map((card) => {
        let index = Math.floor(Math.random()*numCards*2);
        if (!shuffledArray[index]) {
            shuffledArray[index] = card;
        } else {
            while (shuffledArray[index]) {
                index = Math.floor(Math.random()*numCards*2);
            } //Ensures no overwrite
            shuffledArray[index] = card;
        }
    });
    
    //Puts a second of each card in a random location
    cards.map((card) => {
        let index = Math.floor(Math.random()*numCards*2);
        if (!shuffledArray[index]) {
            shuffledArray[index] = card;
        } else {
            while (shuffledArray[index]) {
                index = Math.floor(Math.random()*numCards*2);
            }
            shuffledArray[index] = card;
        }
    });
    
    return shuffledArray;
}


//Toggles to show card face
function flipCard() {
    e.target.classList.remove();
    e.target.className = "front"
    //Include error handling: cannot flip over only one card
}

//Checks two flipped cards to see if they're a match
function checkMatch() {

    //If matched, keep face up. Otherwise, flip back facedown
}

//Changes card face and back color based on selected theme
function chooseTheme(input, cardArray, shuffledArray) {
    let choice = input.selectedIndex;
    //Mario
    if (choice === 1) {
        cardArray.map((card) => {
            card.style.backgroundColor = "red";
        })
    } else if (choice === 2) {
        cardArray.map((card) => {
            card.style.backgroundColor = "blue";
        })
    } else {
        cardArray.map((card) => {
            card.style.backgroundColor = "purple";
        })
    }
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