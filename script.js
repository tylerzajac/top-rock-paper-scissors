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

function getHumanChoice(){
    let choice = prompt("Enter Rock, Paper, or Scissors");

    // standardize human input
    const normHumanChoice = choice.toLowerCase();

    return normHumanChoice;
}



let humanSelection;
let computerSelection;

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice(randomNumber);
    console.log("Human's choice: " + humanChoice);
    console.log("Computer's choice: " + computerChoice);

    if (humanChoice === 'rock' && computerChoice === 'Paper'){
        console.log("You lose! Paper covers Rock.");
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === "Rock") {
        console.log("Round tie! No winners and no losers.");
    } else if (humanChoice === 'rock' && computerChoice === 'Scissors') {
        console.log("You win! Rock crushes scissors!");
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'Paper') {
        console.log("You win! Scissors cut paper.");
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'Rock') {
        console.log("You lose! Rock crushes scissors");
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'Scissors') {
        console.log("Round tie! No winners and no losers.");
    } else if (humanChoice === 'paper' && computerChoice === 'Paper') {
        console.log("Round tie! No winners and no losers.");
    } else if (humanChoice === 'paper' && computerChoice === 'Rock') {
        console.log("You win! Paper covers rock!");
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'Scissors') {
        console.log("You lose! Scissors cut paper.");
        computerScore++;
    }

    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
}

function playGame(number) {
    for (let i = 0; i < number; i++) {
        playRound(humanSelection, computerSelection);
    }
}

playGame(5);