console.log("Hello, World");

let randomNumber = Math.random();

function getComputerChoice(number){    
    if (number <= 0.33) {
        return "Rock";
    } else if(number > 0.33 && number <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("Computer's choice: " + getComputerChoice(randomNumber));

function getHumanChoice(){
    const choice = prompt("Enter Rock, Paper, or Scissors");

    return choice;
}

console.log("Human's choice: " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;

