document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom Content Loaded')
})

enemyBox_2.style.backgroundImage = "url('JPG/pirate_1.jpg')"

enemyBox_1.style.backgroundImage = "url('JPG/pirate_2.jpg')"

enemyBox_3.style.backgroundImage = "url('JPG/pirate_3.png')"

let i = 5

let gameOver = false

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
        enemy_2_shoot()
        enemy_3_shoot()
    }
}

function beginCountDown() {

    if (holstered === true && gameOver === false) {

        countDown = setInterval(count, 1000)

        count()

        holstered = false
    }
} 

function end() {
    clearInterval(countDown)
}

document.getElementById('holsterBox').addEventListener('mouseenter', () => {

    if (holstered === true && gameOver === false) {

        beginCountDown()

    }
})

document.getElementById('holsterBox').addEventListener('mouseleave', () => {

    if (holstered === false && canDraw === false && gameOver === false) {

        clearTimeout(beginCountDown)

        setTimeout(end, 1)

        topText.innerText = 'Holster Your Weapon'

        holstered = true

        i = 5

    }

})

document.getElementById('enemyBox_2').addEventListener('click', () => {

    if (canDraw === true && gameOver === false) {

        enemyBox_2.style.backgroundImage = "url('JPG/pirate_dead.jpg')"

        enemy_1.alive = false

        //topText.innerText = 'You Win!'
    }
})

document.getElementById('enemyBox_1').addEventListener('click', () => {

    if (canDraw === true && gameOver === false) {

        enemyBox_1.style.backgroundImage = "url('JPG/pirate_dead.jpg')"

        enemy_2.alive = false

        //topText.innerText = 'You Win!'
    }
})

document.getElementById('enemyBox_3').addEventListener('click', () => {

    if (canDraw === true && gameOver === false) {

        enemyBox_3.style.backgroundImage = "url('JPG/pirate_dead.jpg')"

        enemy_3.alive = false

        //topText.innerText = 'You Win!'
    }
})

//Enemy 1 (in enemyBox 2)

const enemy_1 = {
    accuracy: 5,
    alive: true,
}

let randomNumber_1 = null

function generateNumber_1() {
    randomNumber_1 = Math.floor(Math.random() * enemy_1.accuracy)
}

function enemy_1_shoot() {
    if (enemy_1.alive === true && gameOver === false) {
        generateNumber_1()
        if (randomNumber_1 >= 4) {
            gameOver = true
            topText.innerText = 'Game Over'
        } else {
            setInterval(enemy_1_shoot, 500)
        }
    }
}

//Enemy 2 (in enemy box 1)

const enemy_2 = {
    accuracy: 5,
    alive: true,
}

let randomNumber_2 = null

function generateNumber_2() {
    randomNumber_2 = Math.floor(Math.random() * enemy_2.accuracy)
}

function enemy_2_shoot() {
    if (enemy_2.alive === true && gameOver === false) {
        generateNumber_2()
        if (randomNumber_2 >= 4) {
            gameOver = true
            topText.innerText = 'Game Over'
        } else {
            setInterval(enemy_2_shoot, 750)
        }
    }
}

//Enemy 3 (in enemy box 3)

const enemy_3 = {
    accuracy: 5,
    alive: true,
}

let randomNumber_3 = null

function generateNumber_3() {
    randomNumber_3 = Math.floor(Math.random() * enemy_3.accuracy)
}

function enemy_3_shoot() {
    if (enemy_3.alive === true && gameOver === false) {
        generateNumber_3()
        if (randomNumber_3 >= 4) {
            gameOver = true
            topText.innerText = 'Game Over'
        } else {
            setInterval(enemy_3_shoot, 1000)
        }
    }
}