const playerScoreEl = document.getElementById('player-score')
const playerChoiceEl = document.getElementById('player-choice')
const computerScoreEl = document.getElementById('computer-score')
const computerChoiceEl = document.getElementById('computer-choice')
const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock')
const playerPaper =  document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerRock = document.getElementById('computerRock')
const computerPaper =  document.getElementById('computerPaper')
const computerScissors = document.getElementById('computerScissors')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

// Reset all selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected')
  })
}

// passing player selection value and styling icon
function select(playerChoice) {
  resetSelected()
  // Add 'selected' styling & playerChoice
  switch(playerChoice) {
    case 'rock':
      playerRock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Rock'
      break

      case 'paper':
      playerPaper.classList.add('selected')
      playerChoiceEl.textContent = ' --- Paper'
      break

      case 'scissors':
      playerScissors.classList.add('selected')
      playerChoiceEl.textContent = ' --- scissors'
      break

      case 'lizard':
      playerLizard.classList.add('selected')
      playerChoiceEl.textContent = ' --- Lizard'
      break

      case 'spock':
      playerSpock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Spock'
      break

      default:
        break


  }
}
