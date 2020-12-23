document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom Content Loaded')
})

enemyBox_2.style.backgroundImage = "url('JPG/pirate_1.jpg')"

let i = 5

let holstered = true

let canDraw = false

let countDown = null

function count() {
    if (i !== 0) {
        topText.innerText = i
        i--
    } else {
        topText.innerText = 'Draw!'
        canDraw = true
        end()
    }
}

function end() {
    clearInterval(countDown)
}

function beginCountDown() {

    if (holstered === true) {

        count()

        countDown = setInterval(count, 1000)

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

document.getElementById('enemyBox_2').addEventListener('click', () => {

    if (canDraw === true) {

        enemyBox_2.style.backgroundImage = "url('JPG/pirate_2.jpg')"

    }
})