>> This is the note for Rock paper scissors project 

**Javascript**: 

The project has  steps 

1. get computer choice 

2. get human choice 

3. play one round - compares the choices from both sides 

4. reach 5 wins **or** play total five rounds 

**css** 

1. scores board 
- that could record each side's scores

2. choices click 

3. record every single choices 
    - push/ add to the screen 


The starter page 

- it has a typewriter effect 

---- 
>>> Get Computer Choice 

Generate random number 

1. generate a random number between [1,10]

Math.floor(Math.random()*(10 + 1))

2. [5,10]
Math.floor(Math.random()*(5 + 1)) + 5

3. [n,m]
Math.floor(Math.random()*(m - n + 1)) + n 

``` javascript 
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
```

