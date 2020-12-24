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
        enemy_1_shoot()
    }
}

function beginCountDown() {

    if (holstered === true) {

        countDown = setInterval(count, 1000)

        count()

        holstered = false
    }
} 

function end() {
    clearInterval(countDown)
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

//************* */

let randomNumber = null

const enemy_1 = {
    accuracy: 4,
}

function generateNumber() {
    randomNumber = Math.floor(Math.random() * enemy_1.accuracy)
}

function enemy_1_shoot() {
    generateNumber() 
    if (randomNumber >= 2) {
        canDraw = false
        topText.innerText = 'Game Over'
        randomNumber = null
    } else {
        setTimeout(enemy_1_shoot, 500)
    }
}
