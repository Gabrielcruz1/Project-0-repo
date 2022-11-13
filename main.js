
const meter1 = document.querySelector('.restMeter')
const meter2 = document.querySelector('.hungryMeter')
const meter3 = document.querySelector('.boredMeter')
const meter4 = document.querySelector('.ageMeter')

const restButton = document.querySelector('#restButton');
const hungryButton = document.querySelector('#hungryButton');
const boredButton = document.querySelector('#boredButton');
const startButton = document.querySelector('#startGame');

let restRaiser = 0
let hungryRaiser = 0
let boredRaiser = 0
let ageRaiser = 0


// 
setInterval(() =>{
    meter1.innerHTML = `Rest meter: ${restRaiser++} `
    meter2.innerHTML = `Hungry meter: ${hungryRaiser++}`
    meter3.innerHTML = `Bored meter: ${boredRaiser++}`
    meter4.innerHTML = `🐯 age: ${ageRaiser++}`

}, 1000)


// below are functions that decrease the meters 
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