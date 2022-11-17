//Rock Paper Scissors
    //Rock beats Scissor, Scissor beats Paper, Paper beats Rock
//The Game is played through the console
    //The game is started through invoking a function through the console
        //game()
//User inputs Rock or Paper or Scissor
    //Input will come through a Prompt
    //Inputs need to be case insensitive
function getPlayerChoice() {
    let selection = prompt("\n\n"+"Pick Rock, Paper, or Scissor"+"\n\n"+"If your pick is invalid or you don't pick anything, the AI will pick Scissor for you.");
    if (selection === null) {
        selection = "scissor"
        }
    else {
        selection=selection.toLowerCase()

    }
    selection==="rock" ?selection="Rock" :selection==="paper" ?selection="Paper" :selection="scissor"
    return selection
}
//AI also randomly inputs Rock or Paper or Scissor
    //Generate a number between 0-2 and pick AI input based on that number.
function getComputerChoice() {
    let nmb = Math.floor(Math.random()*3)
    let comp =""
    nmb == 0 ?comp="Rock" :nmb == 1 ?comp="Paper" :comp="Scissor";
    return comp
}
//Program evaluates the 2 Inputs, declares a winner and outputs a notification
    //Program also needs to declare a possible draw
    //Notification should output both the Player and the AI choice and the winner of the round.
    //The declared winner needs to be put out in a return statement so that 5 Rounds can be at the end.
let playerSelection=getPlayerChoice();
let computerSelection=getComputerChoice();
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection==="Rock" && computerSelection==="Rock") {
        result = "It's a draw!"
    }
    else if (playerSelection==="Rock" && computerSelection==="Paper"){
        result = "You lose! Paper beats Rock!"
    }
    else if (playerSelection==="Rock" && computerSelection==="Scissor"){
        result = "You win! Rock beats Scissor!"
    }
    else if (playerSelection==="Paper" && computerSelection==="Rock"){
        result = "You win! Paper beats Rock!"
    }
    else if (playerSelection==="Paper" && computerSelection==="Paper"){
        result = "It's a draw!"
    }
    else if (playerSelection==="Paper" && computerSelection==="Scissor"){
        result = "You lose! Scissor beats Paper!"
    }
    else if (playerSelection==="Scissor" && computerSelection==="Rock"){
        result = "You lose! Rock beats Scissor!"
    }
    else if (playerSelection==="Scissor" && computerSelection==="Paper"){
        result = "You win! Scissor beats Paper!"
    }
    else if (playerSelection==="Scissor" && computerSelection==="Scissor"){
        result = "It's a draw!"
    }
    return result
}
//The game is played for 5 Rounds, the one with the most wins is declared the ultimate winner
    //The 5 Rounds will be played through a for loop
    //The Program needs to keep track of the individual wins
    //Program needs to output a notification with the Winner and the number of individual wins each.
function game() {
    let playerScore = 0
    let aiScore = 0
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "You win! Rock beats Scissor!" || roundResult === "You win! Paper beats Rock!" || roundResult === "You win! Scissor beats Paper!" ) {
            playerScore++
        }
        else if (roundResult === "You lose! Paper beats Rock!"|| roundResult === "You lose! Scissor beats Paper!"|| roundResult === "You lose! Rock beats Scissor!"){
            aiScore++
        }
    }
    console.log(playerScore +" "+ aiScore)
}
