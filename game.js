// function for computer choices
function computerPlay(){
    let a = Math.random()
     if(a < 1/3) return "rock" 
    else if (1/3 < a && a < 2/3) return "paper" 
    else return "scissors" 
}

function playRound(playerSelection , computerSelection ){
    if(playerSelection === "rock" && computerSelection === "scissors") return "You win! Rock beats Scissors" ;
    else if (playerSelection === "paper" && computerSelection === "rock") return "You win! Paper cover Rock";
    else if(playerSelection === "scissors" && computerSelection === "paper") return "You win! Scissors cut Paper";
    else if (playerSelection === computerSelection) return "Draw";
    else if (playerSelection === "scissors" && computerSelection === "rock") return "You Lose! Can't beat Rock";
    else if(playerSelection === "rock" && computerSelection === "paper") return "You Lose! Paper destroys Rock";
    else if (playerSelection === "paper" && computerSelection === "scissors") return "You Lose! Scissors slices Paper";
    else return "Wrong input choices are Rock, Paper or Scissors";
   
}
let playerCount = 0
let computerCount = 0

for(let i = 0; i < 5; i++){
const playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase()
const computerSelection = computerPlay()
console.log("computer plays " + computerSelection)
console.log("You play " + playerSelection)
console.log(playRound(playerSelection , computerSelection) )
let count = playRound(playerSelection , computerSelection).slice(0 , 7)
if ( count == "You win") playerCount +=  1
else if ( count == "Draw") playerCount += 0
else computerCount = computerCount + 1
}
console.log(computerCount)
if(playerCount > computerCount) console.log("Congratulations You have Triumphed over computer")
else if (playerCount < computerCount) console.log("You lost over computer")
else console.log("You drew")