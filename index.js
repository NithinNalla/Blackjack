let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard , secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
//let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");
function startGame(){
    renderGame()
}
function getRandomCard(){
    return Math.floor(Math.random()*13)+1
}
function renderGame(){
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
messageEl.innerText=message
sumEl.textContent="Sum: "+sum
cardsEl.textContent="Cards: "
for(let i=0;i<cards.length;i++)
{
    cardsEl.textContent+= " "+ cards[i]
}
}
function newCard(){
    console.log("Drawing a new card fromo the deck!")
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    console.log(cards)
    renderGame()
}

