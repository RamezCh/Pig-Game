'use strict';

// Select Elements
// Dice
const dice = document.querySelector('.dice');
// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// Variables
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  dice.src = `images/dice-${diceValue}.png`;
  dice.classList.remove('hidden');
  if (diceValue !== 1) {
    currentScore += diceValue;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// Switch Player Functionality
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Holding Score Functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
