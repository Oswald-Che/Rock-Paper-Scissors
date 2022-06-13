function computerPlay(){
    let a = Math.random()
    if(a < 1/3) return "Rock" 
    else if (1/3 > 0.33 && a < 2/3) return "Paper" 
    else return "Scissors" 
}
console.log(computerPlay())