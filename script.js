'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'CORRECT NUMBER🌟';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number 🤷‍♂️';

    // when players wins
  } else if (guess === Secretnumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER🌟';
    document.querySelector('.number').textContent = Secretnumber;
    document.querySelector('body').style.backgroundcolor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > Secretnumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
