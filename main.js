
const meter1 = document.querySelector('.restMeter');
const meter2 = document.querySelector('.hungryMeter')

const restButton = document.querySelector('#restButton');
const hungryButton = document.querySelector('#hungryButton');
const boredButton = document.querySelector('#boredButton');
const startButton = document.querySelector('#startGame');


// console.log(meter);

// meter.forEach(h2 => {
//     console.log("hello")
// })

let restRaiser = 0
let hungryRaiser = 0


restButton.addEventListener('click', () => {
    restRaiser +=1
    meter1.innerHTML = `rest meter: ${restRaiser} `
})

hungryButton.addEventListener('click', () => {
    hungryRaiser +=1
    meter2.innerHTML = `hungry meter: ${hungryRaiser}`
})