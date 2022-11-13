
let meter1 = document.querySelector('.restMeter');
const meter2 = document.querySelector('.hungryMeter')
const meter3 = document.querySelector('.boredMeter')

const restButton = document.querySelector('#restButton');
const hungryButton = document.querySelector('#hungryButton');
const boredButton = document.querySelector('#boredButton');
const startButton = document.querySelector('#startGame');

// make our rest meter , hungry meter , and bored meter go down automatically


function lowerRest (){
    if(meter1 === 10){
    meter1 -=1}
    meter1.innerHTML = `rest meter: ${meter1}`
}




let restRaiser = 0
let hungryRaiser = 0
let boredRaiser = 0

restButton.addEventListener('click', () => {
    restRaiser -=1
    meter1.innerHTML = `rest meter: ${restRaiser} `
})

hungryButton.addEventListener('click', () => {
    hungryRaiser -=1
    meter2.innerHTML = `hungry meter: ${hungryRaiser}`
})

boredButton.addEventListener('click', () => {
    boredRaiser -=1
    meter3.innerHTML = `bored meter: ${boredRaiser}`
})