let humanScore = 0;
let computerScore = 0;

function playGame() {

    function getComputerChoice () {
        const choice = Math.floor(Math.random() * 3);
        if (choice === 0){
            return "rock";
        } else if (choice === 1){
            return "paper"
        } else {
            return "scissors";
        }   
    }

    function getHumanChoice(){
        const humanChoice = prompt("Rock, paper or scissors?")
        return humanChoice;
    }

    function playRound(humanChoice, computerChoice){
        const player = humanChoice.toLowerCase();
        const computer = computerChoice.toLowerCase();
        console.log(humanChoice)
        console.log(computerChoice)
        
        if (player === computer){
            return "It is a tie!"
        }

        const winsAgainst = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
        
        if (winsAgainst[player] === computer){
            humanScore++;
            return `You win ${player} beats ${computer}!`;
        } else {
            computerScore++;
            return `You lose ${computer} beats ${player}!`;
        }

    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    console.log(playRound(humanSelection, computerSelection));
    console.log(`Human score ${humanScore} Computer Score ${computerScore}` )
}

let round = 0;

while (round < 5){
    playGame()
    round++;
}

function getFinalResult (humanScore, computerScore) {
    if (humanScore > computerScore){
        return `Congrats! You Win! Your score was ${humanScore}`;
    } else if (computerScore > humanScore) {
        return `Better luck next time :(`;
    }
}

console.log(getFinalResult(humanScore, computerScore))
