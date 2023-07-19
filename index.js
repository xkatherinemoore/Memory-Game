import {superMario, avengers} from 'card_decks.js';


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
//console.log(shuffleCards(cards));

function flipCard() {
    
}

function checkMatch() {

}