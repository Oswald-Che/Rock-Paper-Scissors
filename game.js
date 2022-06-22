//function to select computer choice
function computerPlay(){
    let play = Math.random()
    if(play < 1/3) return "rock" 
    else if (1/3 < play && play < 2/3) return "paper" 
    else return "scissors"
}
// removing computer's choice highlight
function transitionend(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('highlight');
}
//function to play a Round 
  function playRound(){
        let c
      if(this.getAttribute('id') == 'rock') c = 'rock'
        else if(this.getAttribute('id') == 'scissors') c = 'scissors'
       else if(this.getAttribute('id') == 'paper') c = 'paper'
    let playerSelection = c
    let computerSelection = computerPlay()
    const info = document.querySelector('.info')
    if(playerSelection === "rock" && computerSelection === "scissors") info.textContent = "You Win! Rock beats Scissors" ;
    else if (playerSelection === "paper" && computerSelection === "rock")info.textContent = "You Win! Paper cover Rock";
    else if(playerSelection === "scissors" && computerSelection === "paper")info.textContent = "You Win! Scissors cut Paper";
    else if (playerSelection === computerSelection) info.textContent = "Draw!!!";
    else if (playerSelection === "scissors" && computerSelection === "rock") info.textContent = "You Lose! Can't beat Rock";
    else if(playerSelection === "rock" && computerSelection === "paper") info.textContent = "You Lose! Paper destroys Rock";
    else if (playerSelection === "paper" && computerSelection === "scissors") info.textContent = "You Lose! Scissors slices Paper";
    else return
    //highlight computer's choice
    const highlight = document.querySelector(`#com${computerSelection}`)
    highlight.classList.add('highlight')
 }
 function game(){
    const transition = document.querySelectorAll('#computerBox .box')
    transition.forEach(box => box.addEventListener('transitionend' , transitionend))
    const choice = document.querySelectorAll('#playerBox .box')
    choice.forEach(box => box.addEventListener('click' , playRound)) 
    const playResult = document.querySelector('.playresult')  
    const comResult = document.querySelector('.comresult')
    const info = document.querySelector(".info")
    //code to record and display score
    if ( info.textContent.slice(0 , 7) == "You Win") {
         playerCount++
         playResult.textContent = playerCount
    }
    else if (info.textContent.slice(0 , 8) == "You Lose") {
        computerCount++
        comResult.textContent = computerCount
    }
    //code to end and restart game
    const end = document.querySelector("#end")
    let finalEnd = function() {
        choice.forEach(box => box.removeEventListener('click' , playRound))
        playerBox.removeEventListener('click' , game)
        info.textContent = "GAME OVER!"
        const button = document.createElement("button")
        button.classList.add('button')
        const btn = document.querySelector('#btn')
        button.textContent = "Play Again"
        btn.appendChild(button)
        button.addEventListener('click' , () => {
            window.location.reload()
        })
    }
    
    if(playerCount == 5) {
        finalEnd()
        end.textContent = "Congratulations!!! You Are The Winner."
    }
      else if( computerCount == 5){
        finalEnd()
        end.textContent = "You have been Defeated, Better luck Next time."
    }
 }


    let playerCount = 0 
   let computerCount = 0
 const playerBox = document.querySelector('#playerBox')
 playerBox.addEventListener('click' , game)


 

















