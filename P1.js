document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom Content Loaded')
})

function introSequence() {
    //enemyBox_2.style.backgroundImage = "url('JPG/spaceship.png')"
    body.style.backgroundImage = "url('JPG/spaceship_background.png')"
    enemyBox_1.innerText = 'After capturing Roth Dering, notorious member of the Klaxorp crime syndicate, your ship limps through space on auxiliary power.'
    sleep(5000).then(() => {enemyBox_1.innerText = 'Having barely escaped the syndicate hideout in one piece, you head for deep space station Cygnus 11 for fuel and much needed repairs.'})
    sleep(10000).then(() => {body.style.backgroundImage = "url('JPG/space_station_background.png')"})
    sleep(10000).then(() => {enemyBox_1.innerText = "Word of Roth`s capture has likely already reached the station, where syndicate thugs undoubtedly wait for you."})
    sleep(15000).then(() => {enemyBox_1.innerText = "Before stepping off your ship, you make sure your blaster is charged."})
    sleep(15000).then(() => {enemyBox_2.style.backgroundImage = "url('JPG/blaster.jpg')"})
    sleep(20000).then(() => {roundOneIntro()})
}

function roundOneIntro() {
    body.style.backgroundImage = "url('JPG/interior.jpeg')"
    enemyBox_2.style.backgroundImage = "url('JPG/pirate_sprite_1_stand.png')"
    enemyBox_1.innerText = "Sometimes you hate being right."
    sleep(5000).then(() => {enemyBox_1.innerText = ""})
    sleep(5000).then(() => {picBox.style.backgroundImage = "url('JPG/profile_2.jpeg')"})
    sleep(5000).then(() => {leftBar.innerText = "Well look who it is."})
    sleep(10000).then(() => {leftBar.innerText = "I'm afraid I'm gonna have to take that bounty off your hands."})
    sleep(15000).then(() => {leftBar.innerText = "But let's make this interesting. Tell you what..."})
    sleep(20000).then(() => {leftBar.innerText = "If you can beat me on the draw, you can keep him."})
    sleep(25000).then(() => {leftBar.innerText = ""})
    sleep(25000).then(() => {topText.innerText = "Holster Weapon to Begin"})
    sleep(25000).then(() => {picBox.style.backgroundImage = ""})
    sleep(25000).then(() => {holster_text.innerText = "Click here to holster your blaster"})
    sleep(25000).then(() => {roundOne = true})
}

function roundTwoIntro() {
    sleep(1000).then(() => {picBox.style.backgroundImage = "url('JPG/profile_3.jpeg')"})
    sleep(1000).then(() => {leftBar.innerText = "Looks like you made short work of that idiot."})
    sleep(3000).then(() => {leftBar.innerText = "Think you can take us both?"})
    sleep(5000).then(() => {leftBar.innerText = ""})
    sleep(5000).then(() => {picBox.style.backgroundImage = ""})
}

function roundThreeIntro() {
    sleep(1000).then(() => {picBox.style.backgroundImage = "url('JPG/profile_1.png')"})
    sleep(1000).then(() => {leftBar.innerText = "Not bad, bounty hunter."})
    sleep(3000).then(() => {leftBar.innerText = "Is three a crowd?"})
    sleep(5000).then(() => {leftBar.innerText = ""})
    sleep(5000).then(() => {picBox.style.backgroundImage = ""})
}

function endSequence() {
    enemyBox_1.style.backgroundImage = ""
    enemyBox_2.style.backgroundImage = ""
    enemyBox_3.style.backgroundImage = ""
    enemyBox_1.innerText = ""
    enemyBox_2.innerText = ""
    enemyBox_3.innerText = ""
    holster_text.innerText = ""
    topText.innerText = ""
    body.style.backgroundImage = "url('JPG/spaceship_background.png')"
    sleep(2000).then(() => {enemyBox_1.innerText = 'Having defended your title of fastest draw in the quadrant, you patch up your ship and head to the nearest Federation outpost to claim the reward on your bounty.'})
}

titleScreen = true

roundOne = false

roundTwo = false

roundThree = false

let i = 5

let gameOver = false

let holstered = true

let canDraw = false

let countDown = null

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function laserBlast() {
    const audio = new Audio('audio/Laser_7.wav')
    audio.play()
}

function scanForRoundOneWin() {

    if (enemy_1.alive === false) {

        roundOne = false

        roundTwo = true

        topText.innerText = 'Holster Weapon for Round 2'

        enemyBox_2.style.backgroundImage = null

        enemyBox_1.style.backgroundImage = "url('JPG/pirate_sprite_2_stand.png')"

        enemyBox_3.style.backgroundImage = "url('JPG/pirate_sprite_3_stand.png')"

        roundTwoIntro()

        holstered = true

        canDraw = false

        countDown = null

        i = 5
    }
}

function scanForRoundTwoWin() {

    if (enemy_2.alive === false && enemy_3.alive === false) {

        roundTwo = false

        roundThree = true

        topText.innerText = 'Holster Weapon for Round 3'

        enemyBox_2.style.backgroundImage = "url('JPG/pirate_sprite_4_stand.png')"

        enemyBox_1.style.backgroundImage = "url('JPG/pirate_sprite_5_stand.png')"

        enemyBox_3.style.backgroundImage = "url('JPG/pirate_sprite_6_stand.png')"

        holstered = true

        canDraw = false

        countDown = null

        i = 5

        roundThreeIntro()
    }
}

function scanForRoundThreeWin() {

    if (enemy_4.alive === false && enemy_5.alive === false && enemy_6.alive === false) {

        roundThree = false

        topText.innerText = 'You Win!'

        sleep(3000).then(() => {endSequence()})

    }
}

function roundOneCount() {
    if (roundOne === true) {
        if (i !== 0) {
            topText.innerText = i
            i--
        } else {
            topText.innerText = 'Draw!'
            canDraw = true
            end()
            enemy_1.alive = true
            enemy_1_shoot()
            enemyBox_2.style.backgroundImage = "url('JPG/pirate_sprite_1_shoot.png')"
        }
    }
}

function roundTwoCount() {
    if (roundTwo === true) {
        if (i !== 0) {
            topText.innerText = i
            i--
        } else {
            topText.innerText = 'Draw!'
            canDraw = true
            end()
            enemy_2.alive = true
            enemy_3.alive = true
            enemy_2_shoot()
            enemy_3_shoot()
            enemyBox_1.style.backgroundImage = "url('JPG/pirate_sprite_2_shoot.png')"
            enemyBox_3.style.backgroundImage = "url('JPG/pirate_sprite_3_shoot.png')"
        }
    }
}

function roundThreeCount() {
    if (roundThree === true) {
        if (i !== 0) {
            topText.innerText = i
            i--
        } else {
            topText.innerText = 'Draw!'
            canDraw = true
            end()
            enemy_4.alive = true
            enemy_5.alive = true
            enemy_6.alive = true
            enemy_4_shoot()
            enemy_5_shoot()
            enemy_6_shoot()
            enemyBox_2.style.backgroundImage = "url('JPG/pirate_sprite_4_shoot.png')"
            enemyBox_1.style.backgroundImage = "url('JPG/pirate_sprite_5_shoot.png')"
            enemyBox_3.style.backgroundImage = "url('JPG/pirate_sprite_6_shoot.png')"
        }
    }
}

function beginCountDownOne() {
    if (roundOne === true) {
        if (holstered === true && gameOver === false) {

            countDown = setInterval(roundOneCount, 1000)

            roundOneCount()

            holstered = false
        }
    }
} 

function beginCountDownTwo() {
    if (roundTwo === true) {
        if (holstered === true && gameOver === false) {

            countDown = setInterval(roundTwoCount, 1000)

            roundTwoCount()

            holstered = false
        }
    }
} 

function beginCountDownThree() {
    if (roundThree === true) {
        if (holstered === true && gameOver === false) {

            countDown = setInterval(roundThreeCount, 1000)

            roundThreeCount()

            holstered = false
        }
    }
} 

function end() {
    clearInterval(countDown)
}

document.getElementById('body').addEventListener('click', () => {
    if (titleScreen === true) {
        topText.innerText = ''
        enemyBox_2.innerText = ''
        titleScreen = false
        sleep(1000).then(() => {introSequence()})
    } 
    
    // if (gameOver === true) {
    //     roundOneIntro()
    //     gameOver = false
    //     roundOne = false
    //     roundTwo = false
    //     roundThree = false
    //     i = 5
    //     holstered = true
    //     canDraw = false
    //     countDown = null
    //     enemyBox_1.style.backgroundImage = ""
    //     enemyBox_3.style.backgroundImage = ""
    //     topText.innerText = ""
    //     enemyBox_1.innerText = "Sometimes you hate being right."
    //     enemyBox_2.innerText = ""
    //     enemyBox_3.innerText = ""
    //     holster_text.innerText = "click here to holster your blaster"
    //     enemy_1.alive = false
    //     enemy_2.alive = false
    //     enemy_3.alive = false
    //     enemy_4.alive = false
    //     enemy_5.alive = false
    //     enemy_6.alive = false
    // }
})

document.getElementById('holsterBox').addEventListener('click', () => {

    if (gameOver === true) {
        roundOneIntro()
        gameOver = false
        roundOne = false
        roundTwo = false
        roundThree = false
        i = 5
        holstered = true
        canDraw = false
        countDown = null
        enemyBox_1.style.backgroundImage = ""
        enemyBox_3.style.backgroundImage = ""
        topText.innerText = ""
        enemyBox_2.innerText = ""
        enemyBox_3.innerText = ""
        holster_text.innerText = "click here to holster your blaster"
        enemy_1.alive = false
        enemy_2.alive = false
        enemy_3.alive = false
        enemy_4.alive = false
        enemy_5.alive = false
        enemy_6.alive = false
    }

    if (roundOne === true) {
        if (holstered === true && gameOver === false) {

            beginCountDownOne()

        }
    } else if (roundTwo === true) {
        if (holstered === true && gameOver === false) {

            beginCountDownTwo()

        }
    } else if (roundThree === true) {
        if (holstered === true && gameOver === false) {

            beginCountDownThree()

        }
    } 
})

document.getElementById('holsterBox').addEventListener('mouseleave', () => {

    if (roundOne === true) {

        if (holstered === false && canDraw === false && gameOver === false) {

            clearTimeout(beginCountDownOne)

            setTimeout(end, 1)

            topText.innerText = 'Holster Your Weapon'

            holstered = true

            i = 5

        }
    } else if (roundTwo === true) {

        if (holstered === false && canDraw === false && gameOver === false) {

            clearTimeout(beginCountDownTwo)

            setTimeout(end, 1)

            topText.innerText = 'Holster Your Weapon'

            holstered = true

            i = 5

        }
    } else if (roundThree === true) {

        if (holstered === false && canDraw === false && gameOver === false) {
            clearTimeout(beginCountDownThree)
            setTimeout(end, 1)
            topText.innerText = 'Holster Your Weapon'
            holstered = true
            i = 5
        }

    }

})

document.getElementById('enemyBox_2').addEventListener('click', () => {

    if (roundOne === true) {

        if (canDraw === true && gameOver === false) {

            laserBlast()

            enemyBox_2.style.backgroundImage = "url('JPG/pirate_sprite_1_die.png')"

            enemy_1.alive = false

            sleep(2000).then(() => {scanForRoundOneWin()})

            //topText.innerText = 'You Win!'
        }

    } else if (roundThree === true) {
        if (canDraw === true && gameOver === false) {
            laserBlast()
            enemyBox_2.style.backgroundImage = "url('JPG/pirate_sprite_4_die.png')"
            enemy_5.alive = false
            scanForRoundThreeWin()
        }
    }
})

document.getElementById('enemyBox_1').addEventListener('click', () => {

    if (roundTwo === true) {

        if (canDraw === true && gameOver === false) {

            laserBlast()

            enemyBox_1.style.backgroundImage = "url('JPG/pirate_sprite_2_die.png')"

            enemy_2.alive = false

            if (enemy_3.alive === true) {
                scanForRoundTwoWin()
            } else if (enemy_3.alive === false ) {
                sleep(2000).then(() => {scanForRoundTwoWin()})
            }

            //scanForRoundTwoWin()

            //topText.innerText = 'You Win!'
        }

    } else if (roundThree === true) {
        if (canDraw === true && gameOver === false) {
            laserBlast()
            enemyBox_1.style.backgroundImage = "url('JPG/pirate_sprite_5_die.png')"
            enemy_4.alive = false
            scanForRoundThreeWin()
        }
    }

})

document.getElementById('enemyBox_3').addEventListener('click', () => {

    if (roundTwo === true) {

        if (canDraw === true && gameOver === false) {

            laserBlast()

            enemyBox_3.style.backgroundImage = "url('JPG/pirate_sprite_3_die.png')"

            enemy_3.alive = false

            if (enemy_2.alive === true) {
                scanForRoundTwoWin()
            } else if (enemy_2.alive === false ) {
                sleep(2000).then(() => {scanForRoundTwoWin()})
            }

            //scanForRoundTwoWin()

            //topText.innerText = 'You Win!'
        }

    } else if (roundThree === true) {
        if (canDraw === true && gameOver === false) {
            laserBlast()
            enemyBox_3.style.backgroundImage = "url('JPG/pirate_sprite_6_die.png')"
            enemy_6.alive = false
            scanForRoundThreeWin()
        }
    }

})

//Enemy 1 (round 1: in enemyBox 2)

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
        function enemy_1_blast() {
            const audio1 = new Audio('audio/Laser_1.wav')
            audio1.play()
        }
        enemy_1_blast()
        generateNumber_1()
        if (randomNumber_1 >= 4) {
            enemyBox_2.innerText = 'Hit'
            gameOver = true
            topText.innerText = 'Game Over'
            holster_text.innerText = 'click here to restart'
        } else {
            enemyBox_2.innerText = 'Miss'
            sleep(200).then(() => {enemyBox_2.innerText = ''})
            setInterval(enemy_1_shoot, 500)
        }
    }
}

//Enemy 2 (round 2: in enemy box 1)

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
        function enemy_2_blast() {
            const audio2 = new Audio('audio/Laser_2.wav')
            audio2.play()
        }
        enemy_2_blast()
        generateNumber_2()
        if (randomNumber_2 >= 4) {
            enemyBox_1.innerText = 'Hit'
            gameOver = true
            topText.innerText = 'Game Over'
            holster_text.innerText = 'click here to restart'
        } else {
            enemyBox_1.innerText = 'Miss'
            sleep(200).then(() => {enemyBox_1.innerText = ''})
            setInterval(enemy_2_shoot, 750)
        }
    }
}

//Enemy 3 (round 2: in enemy box 3)

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
        function enemy_3_blast() {
            const audio3 = new Audio('audio/Laser_3.wav')
            audio3.play()
        }
        enemy_3_blast()
        generateNumber_3()
        if (randomNumber_3 >= 4) {
            enemyBox_3.innerText = 'Hit'
            gameOver = true
            topText.innerText = 'Game Over'
            holster_text.innerText = 'click here to restart'
        } else {
            enemyBox_3.innerText = 'Miss'
            sleep(200).then(() => {enemyBox_3.innerText = ''})
            setInterval(enemy_3_shoot, 1000)
        }
    }
}

//Enemy 4 (round 3: in enemy box 1)

const enemy_4 = {
    accuracy: 5,
    alive: true,
}

let randomNumber_4 = null

function generateNumber_4() {
    randomNumber_4 = Math.floor(Math.random() * enemy_4.accuracy)
}

function enemy_4_shoot() {
    if (enemy_4.alive === true && gameOver === false) {
        function enemy_4_blast() {
            const audio4 = new Audio('audio/Laser_4.wav')
            audio4.play()
        }
        enemy_4_blast()
        generateNumber_4()
        if (randomNumber_4 >= 4) {
            enemyBox_1.innerText = 'Hit'
            gameOver = true
            topText.innerText = 'Game Over'
            holster_text.innerText = 'click here to restart'
        } else {
            enemyBox_1.innerText = 'Miss'
            sleep(200).then(() => {enemyBox_1.innerText = ''})
            setInterval(enemy_4_shoot, 1000)
        }
    }
}

//Enemy 5 (round 3: in enemy box 2)

const enemy_5 = {
    accuracy: 5,
    alive: true,
}

let randomNumber_5 = null

function generateNumber_5() {
    randomNumber_5 = Math.floor(Math.random() * enemy_5.accuracy)
}

function enemy_5_shoot() {
    if (enemy_5.alive === true && gameOver === false) {
        function enemy_5_blast() {
            const audio5 = new Audio('audio/Laser_5.wav')
            audio5.play()
        }
        enemy_5_blast()
        generateNumber_5()
        if (randomNumber_5 >= 4) {
            enemyBox_2.innerText = 'Hit'
            gameOver = true
            topText.innerText = 'Game Over'
            holster_text.innerText = 'click here to restart'
        } else {
            enemyBox_2.innerText = 'Miss'
            sleep(200).then(() => {enemyBox_2.innerText = ''})
            setInterval(enemy_5_shoot, 1000)
        }
    }
}

//Enemy 6 (round 3: in enemy box 3)

const enemy_6 = {
    accuracy: 5,
    alive: true,
}

let randomNumber_6 = null

function generateNumber_6() {
    randomNumber_6 = Math.floor(Math.random() * enemy_6.accuracy)
}

function enemy_6_shoot() {
    if (enemy_6.alive === true && gameOver === false) {
        function enemy_6_blast() {
            const audio6 = new Audio('audio/Laser_6.wav')
            audio6.play()
        }
        enemy_6_blast()
        generateNumber_6()
        if (randomNumber_6 >= 4) {
            enemyBox_3.innerText = 'Hit'
            gameOver = true
            topText.innerText = 'Game Over'
            holster_text.innerText = 'click here to restart'
        } else {
            enemyBox_3.innerText = 'Miss'
            sleep(200).then(() => {enemyBox_3.innerText = ''})
            setInterval(enemy_6_shoot, 1000)
        }
    }
}