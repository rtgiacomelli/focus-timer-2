import { startTimer, stopTimer } from './timer.js';
import { addMinutes, subtractMinutes } from './timeAdjustment.js';
import { playTreeMusic, playRainMusic, playCoffeeMusic, playCampfireMusic } from './music.js';

const playButton = document.querySelector('[data-action="toggleRunning"]');
const stopButton = document.querySelector('[data-action="reset"]');
const plusButton = document.querySelector('.ph-plus-circle');
const minusButton = document.querySelector('.ph-minus-circle');

const treeButton = document.querySelector('[data-action="musicTree"]');
const rainButton = document.querySelector('[data-action="musicRain"]');
const coffeeButton = document.querySelector('[data-action="musicCoffee"]');
const campfireButton = document.querySelector('[data-action="musicCampfire"]');

playButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
plusButton.addEventListener('click', addMinutes);
minusButton.addEventListener('click', subtractMinutes);

treeButton.addEventListener('click', playTreeMusic);
rainButton.addEventListener('click', playRainMusic);
coffeeButton.addEventListener('click', playCoffeeMusic);
campfireButton.addEventListener('click', playCampfireMusic);

export { treeButton, rainButton, coffeeButton, campfireButton }