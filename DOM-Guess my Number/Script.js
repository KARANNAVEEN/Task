'use strict';
/*
// multi dot operator run from left to right
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 46;
console.log(document.querySelector('.guess').value);
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const DisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretnumber;
// RESET
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  DisplayMessage('start guessing');
  document.querySelector('.guess').value = null;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
// click func that run guess game
document.querySelector('.check').addEventListener('click', function () {
  // it is string so change it to number

  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    console.log(DisplayMessage('It is Zero or None'));
  }
  // when player wins
  else if (guess === secretnumber) {
    DisplayMessage('Correct Guess');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    score++;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // below code is simplified
  else if (guess !== secretnumber) {
    if (score > 1) {
      DisplayMessage(guess > secretnumber ? 'Guess is HIGH' : 'Guess is LOW');
      score--;
    } else {
      DisplayMessage('You Lost Bro');
    }
  }
  //unsimplified code
  //when guess is too high
  //   else if (guess > secretnumber) {-
  //     if (score > 1) {
  //       DisplayMessage(' Guess is HIGH';
  //       score--;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost Bro';
  //     }
  //   }
  // when guess is too low
  //   else if (guess < secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' Guess is LOW';
  //       score--;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost Bro';
  //     }
  //   }

  document.querySelector('.score').textContent = score; // this is current score for each game
  document.querySelector('.highscore').textContent = highscore; // best score ever taken
});
