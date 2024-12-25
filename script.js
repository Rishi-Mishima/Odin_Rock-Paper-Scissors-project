


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
function getHumanChoice() {
    const choices = document.querySelectorAll('.choice');

    // Add click event listeners to each choice
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            // Remove the 'selected' class from all choices
            choices.forEach(c => c.classList.remove('selected'));

            // Add the 'selected' class to the clicked choice
            choice.classList.add('selected');

            // Get the clicked choice
            const humanChoice = choice.getAttribute('data-choice');
            console.log(`Human selected: ${humanChoice}`);

            // Compare choices with the computer
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);


        });
    });
}

// Start the game
getHumanChoice();


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






