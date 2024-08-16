const choices = ["Rock", "Paper", "Scissors"]
const allButtons = document.querySelectorAll("button")
const div = document.querySelector("div")
const body = document.querySelector("body")

function getComputerChoice() {
    let randoMath = Math.floor(Math.random() * 3)
    let compChoice = choices[randoMath]
    return compChoice
}


playGame()


function playGame() {
    let playerChoice = ""
    let compChoice = ""
    let playerScore = 0
    let compScore = 0
    const scoreBoard = document.createElement("div")
    allButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            playerChoice = e.target.textContent;
            let result = playRound(playerChoice, compChoice)

            if (result == "win") ++playerScore
            else if (result == "loss") ++compScore
            scoreBoard.textContent = `Player Score:${playerScore} Computer Score:${compScore}`
            body.appendChild(scoreBoard)
            console.log(playerScore, compScore)
            if (playerScore + compScore == 5) {
                disableButtons()
                const outcome = document.createElement("div")
                if (playerScore > compScore) {
                    outcome.textContent = "VICTORY"
                    body.appendChild(outcome)
                }
                else {
                    outcome.textContent = "DEFEAT"
                    body.appendChild(outcome)
                }
                const restartButton = document.createElement("button")
                restartButton.textContent = "Another Go?"
                body.appendChild(restartButton)
                restartButton.addEventListener("click", () => {
                    outcome.remove()
                    playerScore = 0
                    compScore = 0
                    enableButtons()
                    restartButton.remove()
                    scoreBoard.remove()
                })
            }
        })
    })
}

function disableButtons() {
    const rpsButton = document.querySelectorAll(".rpsButton")
    rpsButton.forEach(btn => {
        btn.setAttribute("disabled", "")
    })
}

function enableButtons() {
    const rpsButton = document.querySelectorAll(".rpsButton")
    rpsButton.forEach(btn => {
        btn.removeAttribute("disabled")
    })
}

function playRound(playerChoice, compChoice) {
    compChoice = getComputerChoice()
    console.log(compChoice, playerChoice)
    if (playerChoice === compChoice) {
        div.textContent = "It's a tie"
        return "tie"
    }
    else if ((playerChoice === choices[0]) && (compChoice === choices[2])) {
        div.textContent = `You win ${playerChoice} beats ${compChoice}`
        return "win"
    }
    else if ((playerChoice === choices[1]) && (compChoice === choices[0])) {
        div.textContent = `You win ${playerChoice} beats ${compChoice}`
        return "win"
    }
    else if ((playerChoice === choices[2]) && (compChoice === choices[1])) {
        div.textContent = `you win ${playerChoice} beats ${compChoice}`
        return "win"
    }
    else {
        div.textContent = `you lose ${compChoice} beats ${playerChoice}`
        return "loss"
    }

}

//when player clicks an option, round plays
//compare player choice with comp choice
//increment winners score, then start another round
//loop until 5 rounds are played
//display winner/loser
