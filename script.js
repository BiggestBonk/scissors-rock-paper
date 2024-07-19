function getComputerChoice () {
    //a number 1 through 3 will be generated.
    let compChoice = Math.floor(Math.random()* 3) + 1  
    // if 1 it will equal rock 2 for scissors and 3 for paper
    if (compChoice === 1){
        return "rock"
    }else if (compChoice === 2){
        return "scissors"
    }else if (compChoice === 3)
        return "paper"
}

function getHumanChoice() {
    //prompt for player to choose
    let playerChoice = prompt("Paper, Scissors, rock?")
    //check whether the choice is valid
     if (playerChoice === "Paper"||
        playerChoice === "Scissors"||
        playerChoice === "Rock")
     return playerChoice
     while (playerChoice != "Paper" ||
        playerChoice != "Scissors"||
        playerChoice != "Rock")
    prompt("Please choose a valid selection")


       

    //return choice
}

console.log(getHumanChoice())