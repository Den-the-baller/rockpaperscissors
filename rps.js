function getComputerChoice(){
    randomSelection = Math.floor(Math.random() * 3)
    compPick = ""

    if (randomSelection == 0) {
        compPick = "Rock"
    } else if (randomSelection == 1) {
        compPick = "Paper"
    } else if (randomSelection == 2) {
        compPick = "Scissors"
    }
    return compPick

}

correctInput = 0

console.log("Welcome to your favorite game - Rock, Paper, Scissors. You will be playing against the computer. Good luck!")


while (correctInput == 0){
    humanChoice = prompt("Please choose Rock, Paper or Scissors")

    if (humanChoice == "Rock"){
        correctInput = 1
    } else if (humanChoice == "Scissors"){
        correctInput = 1
    } else if (humanChoice == "Paper"){
        correctInput = 1
    } else {
        console.log("Invalid input.")
    }
    console.log("You picked " +humanChoice+"!" )
}




compChoice = ""
compChoice = getComputerChoice()
console.log("The computer picked "+compChoice+"!")
console.log("EOF")