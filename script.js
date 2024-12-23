


// --- Get a random computer choice ----
function getComputerChoice() {
    // make the value as 'choice'
    let choice;

    // get a random number 
    const computerRandom = Math.floor(Math.random() * 3)
    console.log(computerRandom);

    // using the random number (integer from 1 to 3)to get three choices
    if (computerRandom === 0) {
        choice = 'paper'
    } else if (computerRandom === 1) {
        choice = 'rock'
    } else if (computerRandom === 2) {
        choice = 'scissors'
    }

    console.log(choice);
    return choice // return the choice as well

}


//---- Get human Choice function----
function getHumanChoice() {
    let humanChoice;

    // get human random choice - using prompt 
    let humanPrompt = prompt("what is your choice pls type rock or paper or scissors")

    if (humanPrompt.toLowerCase() === 'rock') {
        humanChoice = 'rock'
    } else if (humanPrompt.toLowerCase() === 'paper') {
        humanChoice = 'paper'
    } else if (humanPrompt.toLowerCase() === 'scissors') {
        humanChoice = 'scissors'
    }
    console.log(humanChoice);
    return humanChoice

}


//--- Playing one round the logic ---
// create two variables to record the Human and Computer's score 
let humanScore = 0;
let computerScore = 0;

// playRound function is the inner logic for playing a single round: checking who wins 
// by passing two variables, the function becomes independent, not relying on global variable
function playRound(humanChoice, choice) {
    console.log(`Human chose: ${humanChoice}, Computer chose: ${choice}`);
    // if tied up, should not be within the loop 
    if (choice === humanChoice) {
        console.log('tied');
    } else if (
        (humanChoice === 'rock' && choice === 'scissors') ||
        (humanChoice === 'paper' && choice === 'rock') ||
        (humanChoice === 'scissors' && choice === 'paper')
    ) {
        console.log('You Win this round!');
        return 'human'
    } else {
        console.log('Computer Wins this round!');
        return 'computer'
    }

    console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
}




// --- check 5 rounds ---
function playGame() {

    for (let i = 0; i < 5; i++) {
        // record the numbers of round 
        console.log(`Round ${i + 1}:`);

        //play a single round
        const result = playRound(getHumanChoice(), getComputerChoice());

        // track the scores
        if (result === 'human') {
            humanScore++
        } else if (result === "computer") {
            computerScore++
        }

        // Stop early if someone wins 3 rounds
        if (humanScore === 3 || computerScore === 3) {
            break
        }
    }

    // Declare the winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`Sorry, the computer won the game with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();
