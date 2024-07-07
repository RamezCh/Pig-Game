'use strict';

// Select Elements
const players = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];
const scoresElem = [
  document.getElementById('score--0'),
  document.getElementById('score--1'),
];
const currentsElem = [
  document.getElementById('current--0'),
  document.getElementById('current--1'),
];
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Variables
let currentScore, activePlayer, scores, playing;

// Starting Conditions
const init = function () {
  scoresElem.forEach(score => (score.textContent = 0));
  currentsElem.forEach(current => (current.textContent = 0));
  dice.classList.add('hidden');
  players.forEach(player =>
    player.classList.remove('player--winner', 'player--active')
  );
  players[0].classList.add('player--active');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};

init();

// Switch Player Functionality
const switchPlayer = function () {
  currentsElem[activePlayer].textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  players.forEach(player => player.classList.toggle('player--active'));
};

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  if (!playing) return;
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  dice.src = `images/dice-${diceValue}.png`;
  dice.classList.remove('hidden');
  if (diceValue !== 1) {
    currentScore += diceValue;
    currentsElem[activePlayer].textContent = currentScore;
  } else {
    switchPlayer();
  }
});

// Holding Score Functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    scoresElem[activePlayer].textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      players[activePlayer].classList.add('player--winner');
      players[activePlayer].classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// Resetting Game Functionality
btnNew.addEventListener('click', init);
