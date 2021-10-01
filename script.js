



let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

let diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;

document.querySelector('.btn--roll').addEventListener('click', function (){


    let dice = Math.floor(Math.random()* 6)+ 1;

    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';


    if (dice !== 1){
        roundScore += dice;

        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }

    else {
        nextPlayer();
    }
})


document.querySelector('.btn--hold').addEventListener('click', function(){
    // Add current score to Global score
    scores[activePlayer]+= roundScore;
    let playerNumber = activePlayer+1;
    //  Update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    // Check if the player won
    if(scores[activePlayer] >= 20){

        document.querySelector('#name--' + activePlayer).textContent= "WINNER !";
        diceDom.style.display= 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    }
    else{
        let needScore = winScore - scores[activePlayer];
        console.log("Player " + playerNumber +" needs " + needScore + " scores to win");
    }
    // Give the dice to the other player
    nextPlayer();
})




function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // ternary operator
    roundScore = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    diceDom.style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', newGame);

function newGame(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    winScore= 30;
    diceDom.style.display = 'none';
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('name--0').textContent='Player 1';
    document.getElementById('name--1').textContent='Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}












