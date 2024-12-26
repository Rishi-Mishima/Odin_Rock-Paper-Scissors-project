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






function getHumanChoice() {
    //prompt
}



