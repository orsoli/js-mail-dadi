/*
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
    Stampiamo in pagina i due tiri e il risultato
*/

// ---  Preparation phase 
//Retrieve the element interested in DOM
// ? Dice game
const playerResultElement = document.getElementById('player-result')
const pcResultElement = document.getElementById('pc-result')
const winerElement = document.getElementById('winer')



// Create max variable 
const max = 6;
const winer = 'The winer is:';
const noWiner = 'This game have no winer';

//---  Procesing phase
//generate the rendom numbers
const playerRendomNr = Math.floor(Math.random() * max + 1) // player number
const pcRendomNr = Math.floor(Math.random() * max + 1) // Pc number
console.log(playerRendomNr) // Print in console the rendom player number
console.log(pcRendomNr) // Print in console the rendom pc number
// Print in page the player result
playerResultElement.innerText = playerRendomNr
pcResultElement.innerText = pcRendomNr
// Define and print in page the winer
if(playerRendomNr > pcRendomNr){
    winerElement.innerText = `${winer} Player`
}else if(playerRendomNr < pcRendomNr){
    winerElement.innerText = `${winer} Pc`
}else{
    winerElement.innerText = noWiner
}