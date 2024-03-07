import { updateTimerDisplay } from './timer.js'
import state from './state.js'

let minutes = state.minutes;

function addMinutes() {
  minutes += 5;
  updateTimerDisplay(minutes);
}

function subtractMinutes() {
  if (minutes >= 5) {
    minutes -= 5;
    updateTimerDisplay(minutes);
  }
}

export { addMinutes, subtractMinutes };