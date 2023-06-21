const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var segundo=90;
var tempo=0; 
var interval= null; 
var vtCard=[];
timerCont.innerHTML=segundo;

//função para virar carta
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

//função que checa se as cartas são iguais
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        vtCard.push('ok');
        console.log(vtCard);
        sessionStorage.CARTAS = Number(vtCard.length);
        final();
        return;   
    }

    unflipCards();
    
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//funcão que desvira as cartas
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000); 
}

//função que reseta o tabuleiro
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//função que embaralha as cartas
(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
    sessionStorage.clear(vtCard)

})();

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});



function final() {
    var cartaFinal = sessionStorage.CARTAS;


    if (cartaFinal == 6) {
        setTimeout(() => {
            window.location= '../indexGame.html'
        }, 1000);
    }
}
function timer(){
interval = setInterval(() =>
{segundo-=1; 
timerCont.innerHTML = segundo;

if(segundo<=0){
    clearInterval(interval);

 window.location= '../lista.html'
}
},1000);

}