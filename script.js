const buttons = document.querySelectorAll("button");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", playRound("rock", computerChoice));
paper.addEventListener("click", playRound("paper", computerChoice));
scissors.addEventListener("click", playRound("scissors", computerChoice));



let randomNumber = Math.random();

function getComputerChoice(number){    
    if (number <= 0.33) {
        return "rock";
    } else if(number > 0.33 && number <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computer;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice(randomNumber);
    console.log(computerChoice);

    if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ){
        humanScore++;
        console.log("Human");
        return "Human";
    } else if (humanChoice == computerChoice) {
        console.log("Tie");
        return "Tie";
    } else {
        computerScore++;
        console.log("Computer");
        return "Computer";
    }

    
}

function playGame() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.id) {
                const human = button.id;
                playRound(human, computer);
                console.log(human); 
            }
        });
    });
}

playGame();