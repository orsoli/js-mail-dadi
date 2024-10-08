/*
 Dice Game
    Generate a random number from 1 to 6 for both the player and the computer.
    Determine the winner based on who gets the highest score.
    Print both rolls and the result on the page.
*/

/*
 Fake Login
    Create a list of authorized emails.
    Ask the user for their email through a small form.
    Check if the email is in the list of those who can access.
    Print an appropriate message based on the result of the check.
*/

// ---  Preparation phase 
//Retrieve the element interested in DOM
// ? Dice game
const playerResultElement = document.getElementById('player-result')
const pcResultElement = document.getElementById('pc-result')
const winerElement = document.getElementById('winer')

// ? Fake LogIN
const inputEmailElement = document.getElementById('input-email')
const logInBtnElement = document.getElementById('logIn-btn')
const logInResultElement = document.getElementById('logIn-result')

//Create variables 
//? Dice game
const max = 6; // max variable
const winer = 'The winer is:'; //winer variable
const noWiner = 'This game have no winer'; //nowiner variable

//? Fake LogIn
// Create authorixed emails array
const emails = ['filajorsol@gmail.com', 'marcolance@gmail.com','davideinzaghi@gmail.com','mariusminia@gmail.com']
const succesLogIN = 'You are logIn successfully'
const failLogIN = 'Your logIn failed'


//---  Procesing phase
//? Dice Game
//generate the rendom numbers
const playerRendomNr = Math.floor(Math.random() * max + 1) // player rendomNumber
const pcRendomNr = Math.floor(Math.random() * max + 1) // Pc rendomNumber
console.log(playerRendomNr) // Print in console the rendom player number
console.log(pcRendomNr) // Print in console the rendom pc number
// Print in page the player result
playerResultElement.innerText = playerRendomNr
pcResultElement.innerText = pcRendomNr

// Define and print in page the winer
let msg = noWiner;

if(playerRendomNr > pcRendomNr){
   msg = `${winer} Player`
}else if(playerRendomNr < pcRendomNr){
    msg = `${winer} Pc`
}
// Print the message in page
winerElement.innerText = msg

//? Fake LogIn
let isAllowed = false; // Create 'Flag' 
let message; // Create a message variable

// Create an click event listener for button element
logInBtnElement.addEventListener('click', function(){
    const userResult = inputEmailElement.value.trim()  // get the user value
    console.log(userResult) // print in console testing it
    // Create for loop to check if the email user is in authorized email list
    for(i = 0; !isAllowed && i < emails.length; i++){
        const email = emails[i] // Get each email from the list
        console.log(email) // print in console testing it
        // Create a condition to logIn
        if(email === userResult){
            logInResultElement.classList.remove('text-danger') // Remove the text danger color if have one
            logInResultElement.classList.add('text-success') // Added a class for text success color
            message = succesLogIN
            isAllowed = true
        } else{
            logInResultElement.classList.remove('text-success') // Remove the text success color if have one
            logInResultElement.classList.add('text-danger') // Added a class for text danger color
            message = failLogIN
        }

        logInResultElement.innerText = message //Print the logIn message in DOM element


            
    }
})