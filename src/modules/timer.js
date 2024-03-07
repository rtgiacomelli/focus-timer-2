import state from './state.js'

let timerInterval = state.timerInterval;
let minutes = state.minutes;
let seconds = state.seconds;

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      stopTimer();
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateTimerDisplay(minutes);
}

function updateTimerDisplay(minutes) {
  const minutesDisplay = document.getElementById('minutes');
  const secondsDisplay = document.getElementById('seconds');
  
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

updateTimerDisplay(minutes);

export { startTimer, stopTimer, updateTimerDisplay };