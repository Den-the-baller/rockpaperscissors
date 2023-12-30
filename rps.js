function getComputerChoice(){
    randomSelection = Math.floor(Math.random() * 3)
    compPick = ""

    if (randomSelection == 0) {
        compPick = "Rock"
    } else if (randomSelection == 1) {
        compPick = "Paper"
    } else if (randomSelection == 2) {
        compPick = "scissors"
    }
    return compPick

}
compChoice = ""
compChoice = getComputerChoice()
console.log(compchoice)
console.log("EOF")