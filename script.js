let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;    // src = 'dice-' + dice  => dice-4



// document.getElementById('name')
// document.getElementsByClassName('name')
// document.querySelector('#name')
// document.querySelector('.name')
// document.querySelector('h1')
// document.querySelector('#current--0').textContent = dice;
// document.querySelector('#current--0').innerHTML = '<b>' + dice + '</b>';

let diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;

document.querySelector('.btn--roll').addEventListener('click', function (){
    // 1 random number

    let dice = Math.floor(Math.random()* 6)+ 1;      // console.log(dice)

    // 2 display the results
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3 update the round

    if (dice !== 1){
        roundScore += dice;

        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }

    else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // ternary operator
        roundScore = 0;
        document.getElementById('current--0').textContent = 0;
        document.getElementById('current--1').textContent = 0;

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        // document.querySelector('.player--1').classList.remove('player--active'); faqat 1marta ishliydi
        // document.querySelector('.player--0').classList.add('player--active');

        diceDom.style.display = 'none';
    }
})















