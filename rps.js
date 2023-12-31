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

// correctInput = 0
// console.log("Welcome to your favorite game - Rock, Paper, Scissors. You will be playing against the computer. Good luck!")

// while (correctInput == 0){
//     humanChoice = prompt("Please choose Rock, Paper or Scissors")

//     if (humanChoice == "Rock"){
//         correctInput = 1
//     } else if (humanChoice == "Scissors"){
//         correctInput = 1
//     } else if (humanChoice == "Paper"){
//         correctInput = 1
//     } else {
//         console.log("Invalid input.")
//     }
//     console.log("You picked " +humanChoice+"!" )
// }


// compChoice = ""
// compChoice = getComputerChoice()
// console.log("The computer picked "+compChoice+"!")
sameChoice = 0 
compChoice = ""
console.log("Welcome to your favorite game - Rock, Paper, Scissors. You will be playing against the computer. Good luck!")

while (sameChoice == 0){
    correctInput = 0
    while (correctInput == 0){
        humanChoice = prompt("Please choose Rock, Paper or Scissors")
       humanChoice = humanChoice.toLowerCase()
    
        if (humanChoice == "rock"){
            correctInput = 1
        } else if (humanChoice == "scissors"){
            correctInput = 1
        } else if (humanChoice == "paper"){
            correctInput = 1
        } else {
            console.log("Invalid input.")
        }
    }
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1)
    console.log("You picked " +humanChoice+"!" )

    compChoice = getComputerChoice()
    console.log("The computer picked "+compChoice+"!")


    if (humanChoice == compChoice) {
        console.log("You both picked the same thing. Try again!")

    }else if (compChoice == "Rock" && humanChoice == "Scissors"){
        sameChoice = 1
        console.log("Computer wins, you lose!")
    } else if (compChoice == "Paper" && humanChoice == "Rock"){
        sameChoice = 1
        console.log("Computer wins, you lose!")
    } else if (compChoice == "Scissors" && humanChoice == "Paper"){
        sameChoice = 1
        console.log("Computer wins, you lose!")
    } else {
        sameChoice = 1
        console.log("Nice job, you win!")
    }

}
console.log("That is the end of the gane")


