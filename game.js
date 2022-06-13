// function for computer choices
function computerPlay(){
    let a = Math.random()
     if(a < 1/3) return "rock" 
    else if (1/3 < a && a < 2/3) return "paper" 
    else return "scissors" 
}

function playRound(playerSelection , computerSelection ){
    if(playerSelection === "rock" && computerSelection === "scissors") return "You win! Rock beats Scissors" ;
    else if (playerSelection === "paper" && computerSelection === "rock") return "You win Paper cover Rock";
    else if(playerSelection === "scissors" && computerSelection === "paper") return "You win Scissors cut Paper";
    else if (playerSelection === computerSelection) return "Draw";
    else if (playerSelection === "scissors" && computerSelection === "rock") return "You Lose! Can't beat Rock";
    else if(playerSelection === "rock" && computerSelection === "paper") return "You Lose! Paper destroys Rock";
    else if (playerSelection === "paper" && computerSelection === "scissors") return "You Lose! Scissors slices Paper";
    else return "Wrong input choices are Rock, Paper or Scissors";
   
}
const playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase()
//let playerSelection = "rock"
const computerSelection = computerPlay()
console.log("computer plays " + computerSelection)
console.log("You play " + playerSelection)
console.log(playRound(playerSelection , computerSelection) )