//this js is for when either side reached 5 wins - not 5 rounds in total

// get computer choice 

// random choice by using arrays 
function getComputerChoice() {
    let computerArray = ['rock', 'paper', 'scissors']

    // math.random [0,1)
    let index = Math.floor(Math.random() * 3) // array.length
    //let index = Math.floor(Math.random() * computerArray.length)

    //  console.log(index);

    let computerChoice = computerArray[index]

    console.log(computerChoice);

    return computerChoice

}

// ----------------------

// get human choice 


function getHumanChoice() {
    let userInput = prompt('enter a choice: rock, paper, scissors')

    let lowerCase = userInput.toLowerCase()

    console.log(lowerCase);
    return lowerCase
}
// getHumanChoice()


// ----------------------

// compare the results: play one round 

let humanScore = 0;
let computerScore = 0;

function playRound(lowerCase, computerChoice) {

    if (lowerCase === 'rock' && computerChoice == 'scissors' ||
        lowerCase === 'scissors' && computerChoice == 'paper' ||
        lowerCase === 'paper' && computerChoice == 'rock'
    ) {
        console.log('You WIN !');
        humanScore++

    } else if (lowerCase === computerChoice) {
        console.log('its a tie');

    } else {
        console.log('You lost');
        computerScore++
    }
    console.log(`human score is ${humanScore}, the computer score is ${computerScore}`);
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice, computerChoice);
        playGame(); // Recursive call to continue playing
    } else if (humanScore === 5) {
        console.log("You Win the Game!");
        return // Stop the game immediately
    } else if (computerScore === 5) {
        console.log("Computer Wins the Game!");
        return; // Stop the game immediately
    }

}

playGame(); 