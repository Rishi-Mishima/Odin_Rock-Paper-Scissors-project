


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

// Select the choices
//remove the previous class and add the selected
const choices = document.querySelectorAll('.choice');

// choices is not a single element:
//document.querySelectorAll('.choice')returns a NodeList, which is a collection of elements. You cannot directly attach an event listener
//Instead, you need to loop through each element in the NodeList and attach an event listener to each one

// Asynchronous Nature of Event Listeners:
// --- Get Human Choice ---
function getHumanChoice() {
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            // Check if the game has ended
            if (currentRound >= 5 || humanScore === 3 || computerScore === 3) {
                console.log("Game over. Refresh the page to play again.");
                declareWinner();
                return;
            }

            // Remove 'selected' class from all choices
            choices.forEach(c => c.classList.remove('selected'));

            // Add 'selected' class to the clicked choice
            choice.classList.add('selected');

            // Get the human's choice
            const humanChoice = choice.getAttribute('data-choice');
            console.log(`Human selected: ${humanChoice}`);

            // Play the game with the selected choice
            playGame(humanChoice);
        });
    });
}


//--- Playing one round the logic ---
// create two variables to record the Human and Computer's score 

// playRound function is the inner logic for playing a single round: checking who wins 
// by passing two variables, the function becomes independent, not relying on global variable
function playRound(humanChoice, choice) {
    console.log(`Human chose: ${humanChoice}, Computer chose: ${choice}`);
    // if tied up, should not be within the loop 

    const descriptionElement = document.querySelector('.description');
    if (choice === humanChoice) {
        console.log('tied');
        descriptionElement.textContent = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && choice === 'scissors') ||
        (humanChoice === 'paper' && choice === 'rock') ||
        (humanChoice === 'scissors' && choice === 'paper')
    ) {
        console.log('You Win this round!');
        descriptionElement.textContent = 'You Win this round!';
        return 'human'
    } else {
        console.log('Computer Wins this round!');
        descriptionElement.textContent = 'Computer Wins this round!';
        return 'computer'
    }

    //  console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

}




// --- Play Game ---
let currentRound = 0;
let humanScore = 0;
let computerScore = 0;

// --- Play Game ---
function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    // Update scores based on the result
    if (result === 'human') {
        humanScore++;
    } else if (result === 'computer') {
        computerScore++;
    }

    currentRound++;

    console.log(`Round ${currentRound}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);

    // Check if the game should end
    if (currentRound === 5 || humanScore === 3 || computerScore === 3) {
        declareWinner();
    }
}

// --- Restart Game ---
function restartGame() {
    // Reset game variables
    currentRound = 0;
    humanScore = 0;
    computerScore = 0;

    // Reset UI elements
    document.querySelector('.description').textContent = 'Ready to play!';
    document.querySelectorAll('.choice').forEach(choice => choice.classList.remove('selected'));

    // Hide the restart button
    document.getElementById('restart-button').style.display = 'none';

    console.clear();
    console.log("Game restarted. Let's play!");

    // Re-enable choice selection
    getHumanChoice();
}

// --- Declare Winner ---
function declareWinner() {
    const descriptionElement = document.querySelector('.description');

    // Add a class to make the final message visually distinct
    descriptionElement.classList.add('final-message');

    if (humanScore > computerScore) {
        descriptionElement.textContent = `Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`;
    } else if (computerScore > humanScore) {
        descriptionElement.textContent = `Sorry, the computer won the game with a score of ${computerScore} to ${humanScore}.`;
    } else {
        descriptionElement.textContent = "It's a tie overall!";
    }

    // Show the restart button
    document.getElementById('restart-button').style.display = 'block';
}


// Start the game
getHumanChoice();



