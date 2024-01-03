
function getComputerChoice(){
    let randomSelection = Math.floor(Math.random() * 3)
    let compPick = ""

    if (randomSelection == 0) {
        compPick = "Rock"
    } else if (randomSelection == 1) {
        compPick = "Paper"
    } else if (randomSelection == 2) {
        compPick = "Scissors"
    }
    return compPick
}

function playRound(round){
    let sameChoice = 0 
    let compChoice = ""
    while (sameChoice == 0){
        correctInput = 0
        while (correctInput == 0){
            humanChoice = prompt("Round " +round+", please choose Rock, Paper or Scissors")
        humanChoiceLower = humanChoice.toLowerCase()
            if (humanChoiceLower == "rock"){
                correctInput = 1
            } else if (humanChoiceLower == "scissors"){
                correctInput = 1
            } else if (humanChoiceLower == "paper"){
                correctInput = 1
            } else {
                console.log("Invalid input.")
            }
        }
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1)
        console.log("You picked " +humanChoice+"!" )

        compChoice = getComputerChoice()
        compChoiceLower = compChoice.toLowerCase()
        console.log("The computer picked "+compChoice+"!")

        if (humanChoiceLower == compChoiceLower) {
            console.log("You both picked the same thing. Try again!")

        }else if (compChoiceLower == "rock" && humanChoiceLower == "scissors"){
            sameChoice = 1
            console.log("Computer wins round "+round+"")
            compWincount = compWincount + 1
            return "Computer"
        } else if (compChoiceLower == "paper" && humanChoiceLower == "rock"){
            sameChoice = 1
            console.log("Computer wins round "+round+"")
            return "Computer"
        } else if (compChoiceLower == "scissors" && humanChoiceLower == "paper"){
            sameChoice = 1
            console.log("Computer wins round "+round+"")
            return "Computer"
        } else {
            sameChoice = 1
            console.log("Nice job, you win round "+round+"")
            return "Human"
        }
    }
}


console.log("Welcome to your favorite game - Rock, Paper, Scissors. You will be playing 5 rounds against the computer. Good luck!")
let roundCount = 1
let winner = ""
let humanWinCount = 0
let compWinCount = 0

while (roundCount != 6){
    winner = playRound(roundCount)
    if (winner == "Human"){
        humanWinCount = humanWinCount + 1
    } else{
        compWinCount = compWinCount + 1
    }
    roundCount = roundCount + 1
}

if (humanWinCount > compWinCount){
    console.log("Nice job! You win!")
} else {
    console.log("The computer wins. Better luck next time")
}

console.log("That is the end of the gane")


