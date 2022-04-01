'use strict';
// const message = document.querySelector('.message').textContent;
// const number = document.querySelector('.number').textContent = '13';
// const score = document.querySelector('.label-score').textContent = 'score: 10';
// const guess = document.querySelector('.guess').value = '23';
// console.log(message);
// const number = Math.round(Math.random() * 20);


let score = 20;
let highscore = 0;

// calculates random number between 1 - 20 
let number = Math.trunc(Math.random() * 20 + 1);
if (number < 1 ) {
    Math.trunc(Math.random() * 20 + 1);
}
else{
    Math.trunc(Math.random() * 20 + 1);
}
console.log(number);
// checks the player input
let userNumb = document.querySelector('.guess');
if (userNumb > 20) {
    document.querySelector('.message').textContent = 'Number is larger than 20!!';
}
else if  (userNumb < 1) {
    document.querySelector('.message').textContent = 'Number is less than 1!!';
}

// display to player if he filled in a number or not.
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'no number';
        document.querySelector('body').style.backgroundColor = 'red';
    }
    else if (guess === number) {
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = number;
        if (score > highscore) {
            document.querySelector('.highscore').textContent = highscore = score;
        }
    }
    else {
        document.querySelector('.message').textContent = guess > number ? 'too high': 'too low';
        document.querySelector('body').style.backgroundColor = 'red';
        score --;
        document.querySelector('.score').textContent = score;
    }
});

// again button, here you restore the game to 
document.querySelector('.again').addEventListener('click', function (){
    number = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'start guessing.....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    score = 20;
    console.log(number);
});
