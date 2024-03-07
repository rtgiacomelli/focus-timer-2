import state from './state.js'

const treeButton = document.querySelector('[data-action="musicTree"]')
const treeMusic = new Audio('./assets/Floresta.wav')
treeMusic.loop = true

const rainButton = document.querySelector('[data-action="musicRain"]')
const rainMusic = new Audio('./assets/Chuva.wav')
rainMusic.loop = true

const coffeeButton = document.querySelector('[data-action="musicCoffee"]')
const coffeeMusic = new Audio('./assets/Cafeteria.wav')
coffeeMusic.loop = true

const campfireButton = document.querySelector('[data-action="musicCampfire"]')
const campfireMusic = new Audio('./assets/Lareira.wav')
campfireMusic.loop = true

export function playTreeMusic() {

  if(state.isMute) {
    state.isMute = false
    treeButton.classList.add('selected')
    treeMusic.play()
    return
  }

  state.isMute = true
  treeButton.classList.remove('selected')
  treeMusic.pause()
}

export function playRainMusic() {

  if(state.isMute) {
    state.isMute = false
    rainButton.classList.add('selected')
    rainMusic.play()
    return
  }

  state.isMute = true
  rainButton.classList.remove('selected')
  rainMusic.pause()
}

export function playCoffeeMusic() {

  if(state.isMute) {
    state.isMute = false
    coffeeButton.classList.add('selected')
    coffeeMusic.play()
    return
  }

  state.isMute = true
  coffeeButton.classList.remove('selected')
  coffeeMusic.pause()
}

export function playCampfireMusic() {

  if(state.isMute) {
    state.isMute = false
    campfireButton.classList.add('selected')
    campfireMusic.play()
    return
  }

  state.isMute = true
  campfireButton.classList.remove('selected')
  campfireMusic.pause()
}