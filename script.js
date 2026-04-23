let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  const player = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  console.log(humanChoice);
  console.log(computerChoice);

  let result = "";

  if (player === computer) {
    result = "It is a tie!";
  } else {
    const winsAgainst = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winsAgainst[player] === computer) {
      humanScore++;
      result = `You win! ${player} bets ${computer}`;
    } else {
      computerScore++;
      result = `You lose! ${computer} beast ${player}`;
    }
  }

  document.getElementById("demo").innerHTML = `${result}`;

  document.getElementById("own-points").innerHTML = `${humanScore}`;
  document.getElementById("cpu-points").innerHTML = `${computerScore}`;

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    alert("🎉 You won the game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("💻 The computer won!");
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
}
