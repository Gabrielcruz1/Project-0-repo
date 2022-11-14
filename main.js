// THE METERS SHOWN ON HTML
const meter1 = document.querySelector('.restMeter')
const meter2 = document.querySelector('.hungryMeter')
const meter3 = document.querySelector('.boredMeter')
const meter4 = document.querySelector('.ageMeter')

// MY BUTTONS STORED IN A VARIABLE
const restButton = document.querySelector('#restButton');
const hungryButton = document.querySelector('#hungryButton');
const boredButton = document.querySelector('#boredButton');
const startButton = document.querySelector('#startGame');

// INCREMENTER
let restRaiser = 0
let hungryRaiser = 0
let boredRaiser = 0
let ageRaiser = 0

//A START GAME FUNCTION THAT ALLOWS THE INTERVALS TO BEGIN
    startButton.addEventListener('click',() => {
    const timer = setInterval(() =>{   
        if (restRaiser === 10 || hungryRaiser === 10 || boredRaiser === 10){
        clearInterval(timer)
        } 
        meter1.innerHTML = `Rest meter: ${restRaiser++}`
        meter2.innerHTML = `Hungry meter: ${hungryRaiser++}`
        meter3.innerHTML = `Bored meter: ${boredRaiser++}`
        meter4.innerHTML = `🐯 Age: ${ageRaiser++}`
     }, 1000)
     
 })

// A FUNCTION THAT WILL ALERT THE USER LOST-GAME OVER
function alertFunction(){
    if(meter1 === 10 || hungryRaiser === 10 || boredRaiser === 10){
    alert("Oh No! Game Over!");
    }
}


// END GAME FUNCTION THAT KILLS GAME WHEN ANY METER HITS 10
// function endGame(){
//     if (meter1 === 10 || meter2 === 10 || meter3 === 10){
//         clearInterval(timer)
//     }
// }

// BELOW IS SET INTERVAL FUNCTION 
// setInterval(() =>{   
//    meter1.innerHTML = `Rest meter: ${restRaiser++}`
//    meter2.innerHTML = `Hungry meter: ${hungryRaiser++}`
//    meter3.innerHTML = `Bored meter: ${boredRaiser++}`
//    meter4.innerHTML = `🐯 Age: ${ageRaiser++}`
// }, 1000)


// BELOW ARE FUNCTIONS FOR BUTTONS THAT DECREASE THE METER
restButton.addEventListener('click', () => {
    restRaiser -=1
    meter1.innerHTML = `Rest meter: ${restRaiser}`
})

hungryButton.addEventListener('click', () => {
    hungryRaiser -=1
    meter2.innerHTML = `Hungry meter: ${hungryRaiser}`
})

boredButton.addEventListener('click', () => {
    boredRaiser -=1
    meter3.innerHTML = `Bored meter: ${boredRaiser}`
})