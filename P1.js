document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom Content Loaded')
})

let i = 5

let holstered = true

let canDraw = false

let countDown = null

function reset() {
    clearInterval(countDown)
    }

function count() {
    if (i !== 0) {
        topText.innerText = i
        i--
    } else {
        topText.innerText = 'Draw!'
        canDraw = true
    }
}

function end() {
    clearInterval(countDown)
}

// function reset() {
//     clearInterval(countDown)
// }

function beginCountDown() {

    if (holstered === true) {

        count()

        countDown = setInterval(count, 1000)

        setTimeout(end, 7000)

        holstered = false
    }
} 

document.getElementById('holsterBox').addEventListener('mouseenter', () => {

    if (holstered === true) {

        beginCountDown()

    }
})

document.getElementById('holsterBox').addEventListener('mouseleave', () => {

    if (holstered === false && canDraw === false) {

        clearTimeout(beginCountDown)

        setTimeout(end, 1)

        topText.innerText = 'Holster Your Weapon'

        holstered = true

        i = 5

    }

})