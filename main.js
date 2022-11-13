
const meter1 = document.querySelector('.restMeter');
const meter2 = document.querySelector('.hungryMeter')
const meter3 = document.querySelector('.boredMeter')

const restButton = document.querySelector('#restButton');
const hungryButton = document.querySelector('#hungryButton');
const boredButton = document.querySelector('#boredButton');
const startButton = document.querySelector('#startGame');

let restRaiser = 0
let hungryRaiser = 0
let boredRaiser = 0

// function lowerRest (){
//     if(meter1 === 10){
//     meter1 -=1}
//     meter1.innerHTML = `rest meter: ${meter1}`
// }

// setInterval(() =>{

// }, 1000)


// below are functions that decrease the meters 
restButton.addEventListener('click', () => {
    restRaiser -=1
    meter1.innerHTML = `Rest meter: ${restRaiser} `
})

hungryButton.addEventListener('click', () => {
    hungryRaiser -=1
    meter2.innerHTML = `Hungry meter: ${hungryRaiser}`
})

boredButton.addEventListener('click', () => {
    boredRaiser -=1
    meter3.innerHTML = `Bored meter: ${boredRaiser}`
})