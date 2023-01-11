let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Random number generator function
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// Compare guesses function
const compareGuesses = (humanGuess, computerGuess) => {
    let secretNumber = generateTarget();
    if ((Math.abs(humanGuess - secretNumber)) <= (Math.abs(computerGuess - secretNumber))) {
        return true;
    } else {
        return false;
    }
}

// Update Score function
const updateScore = currentRoundWinner => {
    if (currentRoundWinner === 'human') {
        humanScore += 1;
    } else if (currentRoundWinner === 'computer') {
         computerScore += 1;
    }
}

// Advance Round function
const advanceRound = () => currentRoundNumber += 1;



