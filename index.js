let playerScore = 0;
let computerScore = 0;

function determineWinner(playerChoice, computerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const outcomes = [
        ['ties', 'crushes', 'crushed by', 'eaten by', 'vaporizes'],
        ['covers', 'ties', 'cut by', 'eaten by', 'disproved'],
        ['crushes', 'cuts', 'ties', 'decapitates', 'smashes'],
        ['eats', 'eats', 'decapitated by', 'ties', 'poisoned by'],
        ['vaporizes', 'disproves', 'smashes', 'poisons', 'ties']
    ];

    const playerIndex = choices.indexOf(playerChoice);
    const computerIndex = choices.indexOf(computerChoice);
    const outcome = outcomes[playerIndex][computerIndex];

    if (playerIndex === computerIndex) {
        return "ნიჩია";
    } else if (outcome.includes('ties')) {
        return "ნიჩიაა!";
    } else if (outcome.includes('crushes') || outcome.includes('covers') || outcome.includes('cuts') || outcome.includes('eats') || outcome.includes('vaporizes')) {
        playerScore++;
        return "შენ მოიგე!";
    } else {
        computerScore++;
        return "კომპიუტერმა მოიგო!";
    }
}

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, computerChoice);
    const resultElement = document.getElementById('result');
    resultElement.innerText = `შენ აირჩიე ${playerChoice} ${getEmoji(playerChoice)}. კომპიუტერმა აირჩია ${computerChoice} ${getEmoji(computerChoice)}. ${result}`;
    updateScoreboard();
}

function updateScoreboard() {
    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function getEmoji(choice) {
    switch (choice) {
        case 'rock':
            return '🪨';
        case 'paper':
            return '📄';
        case 'scissors':
            return '✂️';
        case 'lizard':
            return '🦎';
        case 'spock':
            return '🖖';
        default:
            return '';
    }
}

document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', event => {
        play(item.id);
    })
});