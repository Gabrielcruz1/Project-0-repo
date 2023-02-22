// HTML METERS VARIABLE
const meter1 = document.querySelector('.restMeter')
const meter2 = document.querySelector('.hungryMeter')
const meter3 = document.querySelector('.boredMeter')
const meter4 = document.querySelector('.ageMeter')

//BUTTONS IN A VARIABLE
const restButton = document.querySelector('#restButton');
const hungryButton = document.querySelector('#hungryButton');
const boredButton = document.querySelector('#boredButton');
const startButton = document.querySelector('#startGame');

//PLAYER NAME 
const playerName = document.querySelector('.inputClass')

// INCREMENT
let restRaiser = 0
let hungryRaiser = 0
let boredRaiser = 0
let ageRaiser = 0

//START GAME FUNCTION STARTS INTERVALS 
startButton.addEventListener('click', () => {
    const timer = setInterval(() => {
        if (restRaiser === 10 || hungryRaiser === 10 || boredRaiser === 10) {
            clearInterval(timer)
            alert("Oh No! Game Over!");
        }
        meter1.innerHTML = `Rest meter: ${restRaiser++}`
        meter2.innerHTML = `Hungry meter: ${hungryRaiser++}`
        meter3.innerHTML = `Bored meter: ${boredRaiser++}`
        meter4.innerHTML = `🐯 Age: ${ageRaiser++}`
    }, 1000)

})

//DECREMENTING FUNCTIONS FOR METERS
restButton.addEventListener('click', () => {
    while (restRaiser >= 1) {
        restRaiser -= 1
        meter1.innerHTML = `Rest meter: ${restRaiser}`
    }
})

hungryButton.addEventListener('click', () => {
    while (hungryRaiser >= 1) {
        hungryRaiser -= 1
        meter2.innerHTML = `Hungry meter: ${hungryRaiser}`
    }
})

boredButton.addEventListener('click', () => {
    while (boredRaiser >= 1) {
        boredRaiser -= 1
        meter3.innerHTML = `Bored meter: ${boredRaiser}`
    }
})

