import inquirer from "inquirer"

let roundNumber: number = Math.floor((Math.random() * 4) + 1);
let userInput = await inquirer.prompt({
    type: "number",
    name: "guessedNumber",
    message: "Guess a number between 1 -4"
}) 

if(userInput.guessedNumber === roundNumber){
    console.log(`Conglatulations! You guessed correctly!`);
}else{
    console.log(`Sorry! Trynext time. correct ans is: ${roundNumber}`);
}