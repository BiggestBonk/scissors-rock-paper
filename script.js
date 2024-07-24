function getComputerChoice () {
    //a number 1 through 3 will be generated.
    let compChoice = Math.floor(Math.random()* 3) + 1  
    // if 1 it will equal rock 2 for scissors and 3 for paper
    if (compChoice === 1){
        compChoice = "rock"
        return compChoice
    }else if (compChoice === 2){
        compChoice = "scissors"
        return compChoice
    }else if (compChoice === 3){
        compChoice = "paper"
        return compChoice
    }
}

function getPlayerChoice() {
    //prompt for player to choose
    let playerChoice = prompt("Paper, Scissors, rock?")
    playerChoice = playerChoice.toLowerCase()
    //check whether the choice is valid
     if (playerChoice === "paper"||
        playerChoice === "scissors"||
        playerChoice === "rock"){
     return playerChoice }
        while (playerChoice != "paper" ||
        playerChoice != "scissors"||
        playerChoice != "rock") {
        playerChoice = prompt("invalid choice, choose again")
        playerChoice = playerChoice.toLowerCase()
        if (playerChoice === "paper"||
            playerChoice === "scissors"||
            playerChoice === "rock"){
         return playerChoice }
        }




    //return choice
}



let playerScore = 0
let computerScore = 0

function capitalize(text) {
let start = text.substr(0,1)
let end = text.substr(1)
start = start.toUpperCase()
end = end.toLowerCase()
return start.concat(end)
}

function playRound(playerChoice, compChoice) {
//compare choices of player and comp
//if player and comp choose same choice, tie
if (playerChoice === compChoice){
    console.log("It's a tie")
//if player scissors and comp paper, player win
} else if (playerChoice === "scissors" && compChoice === "paper"){
    console.log("You win, Scissors beats Paper")
//if player paper and comp rock, player win
}else if (playerChoice === "paper" && compChoice === "rock"){
    console.log("You win, Paper beats Rock")
//if player rock and comp scissors,player win
}else if (playerChoice === "rock" && compChoice === "scissors"){
    console.log("You win, Rock beats Scissors")
//otherwise, lose
}else { 
 playerChoice = capitalize(playerChoice)
 compChoice = capitalize(compChoice)   
    console.log(`You lose, ${compChoice} beats ${playerChoice}`)}
//log winner, store score

}
    
const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice()

playRound(playerSelection, computerSelection)


