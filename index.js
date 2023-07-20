import {superMario, avengers, defaultDeck} from './card_decks.js';


let cards = defaultDeck;
const shuffledArray = shuffleCards(cards);
console.log(shuffledArray);
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
function flipCard(e) {;
    e.target.classList.remove();
    e.target.className = "front"
    
    let index = e.srcElement.id;
    let thisCard = shuffledArray[index]; 
    
    e.target.style.backgroundimage = thisCard.image;

    compareCardsInitMatch();
}

function compareCardsInitMatch() {
    let cardsFlipped = cardListArr.filter((card) => {
        return card.className.contains('front');
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

    let secondCardIndex = cardListArr.findIndex((card) => {
        return card.className === 'front'
    }, firstCardIndex);
    let secondCard = shuffledArray[secondCardIndex];

    if (firstCard.id === secondCard.id) {
        //It's a match
    } else {
        //reset cards to .back
    }
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
    } else if (choice === 2) {
        cardListArr.map((card) => {
            card.style.backgroundColor = "blue";
            cards = avengers;
        })
    } else {
        cardListArr.map((card) => {
            card.style.backgroundColor = "purple";
            cards = defaultDeck;
        })
    }

    return cards;
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
