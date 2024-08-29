let cards = [];
let player = {
    name: "Nithin",
    balance: 143
}
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": ₹" + player.balance;

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = []; // Reset cards array
    sum = 0;    // Reset sum

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard);
    cards.push(secondCard);
    renderGame();
}

function getRandomCard() {
    let rNum = Math.floor(Math.random() * 13) + 1;
    if (rNum > 10) {
        return 10;
    } else if (rNum === 1) {
        return 11;
    } else {
        return rNum;
    }
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.innerText = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];
    }
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!");
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        console.log(cards);
        renderGame();
    }
}
