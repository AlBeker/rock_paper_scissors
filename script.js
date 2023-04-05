function getComputerChoice() {
 const choices = ["Rock", "Paper", "Scissors"];
 const randomIndex = Math.floor(Math.random() * choices.length)
 return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

if (playerSelection === computerSelection) {
 return "It's a tie!"; }
else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors"; }
else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock"; }
else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper"; }
else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
}
}

function game() {
 let playerScore = 0;
 let computerScore = 0;

 for (let i=0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.startsWith("You win!")) {
        playerScore++;
    }
    else if (result.startsWith("You lose")) {
        computerScore++;
    }
console.log(result);
 }

if (playerScore > computerScore) {
    console.log("You win the game! Final score: " + playerScore + " to " + computerScore);
 }
else if (computerScore > playerScore) {
    console.log("You lose the game! Final score: " + computerScore + " to " + playerScore);   
}
else {
    console.log("It's a tie! Final score: " + playerScore + " to " + computerScore);
}
}