const choices = ["✊", "✌️", "✋","🖖","🦎"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0; 
let tie = 0;

function togglePlayButtons() {
  const buttonsCont = document.getElementById('buttonsCont');
  buttonsCont.classList.toggle('hidden')
}

function startGame() {
  const startGameButton = document.getElementById('startGame');
  startGameButton.classList.add('hidden');
  togglePlayButtons()
}
function getWinner(computerDicision, playerDicision) {
  debugger
  const tie = "ფრეა 🫱🏻‍🫲🏽"; 
  const playerWon = "შენ მოიგე 🎊";
  // მეგობრობა იმარჯვებს                                
  playerScoreDisplay.textContent = playerScore;
  const computerWon = "კომპიუტერმა მოიგო 💻";
  computerScoreDisplay.textContent = computerScore;
  if (computerDicision == playerDicision) {
    return tie;
  }
  debugger;
  switch (computerDicision) {
    case 0:
      if (playerDicision == 1) {
        computerScore++;
        computerScoreDisplay.innerText = computerScore
        return computerWon;
       
      }
      playerScore++;                                 
      playerScoreDisplay.textContent = playerScore;
      return playerWon
    case 1:
      if (playerDicision == 0) {
        playerScore++;                                 
        playerScoreDisplay.textContent = playerScore;
        return playerWon;
      }
      computerScore++;
      computerScoreDisplay.innerText = computerScore
      return computerWon
    case 2:
      if (playerDicision == 0) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore
        return computerWon;
       
      }
      playerScore++;                                 
        playerScoreDisplay.textContent = playerScore;
      return playerWon
    case 3:
      if (playerDicision == 2) {
        computerScore++;
        computerScoreDisplay.textContent = computerScore
        return computerWon;
        
      }
      playerScore++;                                 
        playerScoreDisplay.textContent = playerScore;
      return playerWon 
    case 4:
      if (playerDicision == 3) {
        computerScore++;
        computerScoreDisplay.textContent = computerScore
        return computerWon;
        
      }
      playerScore++;                                 
        playerScoreDisplay.textContent = playerScore;
      return playerWon;
  }
}

function addH2InContainer(innerText) {
  const container = document.getElementById('container')
  const myH2 = document.createElement('h2');
  myH2.innerText = innerText;
  container.appendChild(myH2);
}

function makeChoice(playerChoice) {
  const emojies = ["✊", "✌️", "✋", "🖖", "🦎"]
  const computerChoice = Math.round(Math.random() * 2);
  const result = `კომპიუტერის არჩევანი არის ${emojies[computerChoice]} \n შენი არჩევანი არის ${emojies[playerChoice]}`
  addH2InContainer(result);
  togglePlayButtons();
  const winner = getWinner(computerChoice, playerChoice);
  addH2InContainer(winner);
  const startAgainBtn = document.getElementById('startAgain');
  startAgainBtn.classList.remove('hidden')
}

function removeH2(h2){
  h2.remove()
}

function playAgain() {
  togglePlayButtons();
  const container = document.getElementById('container')
  const h2Elements = container.querySelectorAll('h2');
  console.log(h2Elements)
  h2Elements.forEach(removeH2)
}


// switch(result){
//   case "YOU WIN!":
//       resultDisplay.classList.add("greenText");
//       playerScore++;
//       playerScoreDisplay.textContent = playerScore;
//       break;
//   case "YOU LOSE!":
//       resultDisplay.classList.add("redText");
//       computerScore++;
//       computerScoreDisplay.textContent = computerScore;
//       break;
// }
