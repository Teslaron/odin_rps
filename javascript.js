//Rock Paper Scissors
    //Rock beats Scissor, Scissor beats Paper, Paper beats Rock
//The Game is played through the console
    //The game is started through invoking a function through the console
//User inputs Rock or Paper or Scissor
    //Input will come through a Prompt
    //Inputs need to be case insensitive
function getPlayerChoice() {
    let selection = prompt("Pick Rock, Paper, or Scissor"+"\n\n"+"If your pick is invalid the AI will pick Scissor.").toLowerCase();
    selection==="rock" ?selection="Rock" :selection==="paper" ?selection="Paper" :selection="scissor"
    return selection
}
//AI also randomly inputs Rock or Paper or Scissor
    //Generate a number between 0-2 and pick AI input based on that number.
function getComputerChoice() {
    let number = Math.floor(Math.random()*3)
    number == 0 ?number="Rock" :number == 1 ?number="Paper" :number="Scissor";
    return number
}
//Program evaluates the 2 Inputs, declares a winner and outputs a notification
    //Program also needs to declare a possible draw
    //Notification should output both the Player and the AI choice and the winner of the round.
    //The declared winner needs to be put out in a return statement so that 5 Rounds can be at the end.
//The game is played for 5 Rounds, the one with the most wins is declared the ultimate winner
    //The 5 Rounds will be played through a for loop
    //The Program needs to keep track of the individual wins
    //Program needs to output a notification with the Winner and the number of individual wins each.

