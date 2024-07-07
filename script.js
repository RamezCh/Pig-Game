'use strict';

// Select Elements
// Player 0
const player0 = document.querySelector('.player--0');
const score0 = document.getElementById('score--0');
const currentScore0 = document.getElementById('current--0');
// Player 1
const player1 = document.querySelector('.player--1');
const score1 = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--1');
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
