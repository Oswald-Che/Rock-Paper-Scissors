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
let count
let draw = 0
function gameInfo(a){
    if(a==0) return prompt("Round 1\n Enter Rock, Paper or Scissors").toLowerCase();
     else if(a==1) return prompt("Round 2 \nEnter Rock, Paper or Scissors").toLowerCase();   
    else if(a==2) return prompt("Round 3 \nEnter Rock, Paper or Scissors").toLowerCase();
    else if(a==3) return prompt("Round 4\nEnter Rock, Paper or Scissors").toLowerCase();
    else return  prompt("Round 5\nEnter Rock, Paper or Scissors").toLowerCase();
    }
function game(n){
for(let i = 0; i < n && n<6; i++){
const playerSelection = gameInfo(i)
const computerSelection = computerPlay()
console.log("computer plays " + computerSelection)
console.log("You play " + playerSelection)
console.log(playRound(playerSelection , computerSelection) )
count = playRound(playerSelection , computerSelection).slice(0 , 7)
alert(playRound(playerSelection , computerSelection))
if ( count == "You win") playerCount +=  1
else if ( count == "Draw") draw += 1
else computerCount = computerCount + 1
}
if(playerCount > computerCount) {
    alert(`Congratulations!!! You won!! \n Player score-${playerCount}/${n} \
    Computer score-${computerCount}/${n} Draws-${draw}/${n}` )
    console.log(`Congratulations!!! You won!\n Player score-${playerCount}/${n} \
    Computer score-${computerCount}/${n} Draws-${draw}/${n}`)
}
else if (count == undefined){
     alert("Input 5 or less")
    console.log("Input 5 or less")}
else if (playerCount < computerCount){
     alert(`You lost! Better luck next \n Player score-${playerCount}/${n} \
     Computer score-${computerCount}/${n} Draws-${draw}/${n}`) 
    console.log(`You lost! Better luck next \n Player score-${playerCount}/${n} \
    Computer score-${computerCount}/${n} Draws-${draw}/${n}`)}
else {
    alert(`You drew \n Player score-${playerCount}/${n} \
    Computer score-${computerCount}/${n} Draws-${draw}/${n}`)
    console.log(`You drew \n Player score-${playerCount}/${n} \
    Computer score-${computerCount}/${n} Draws-${draw}/${n}`)}
}
let x = parseInt(prompt("Input number of rounds \n Maximum 5"))
game(x)