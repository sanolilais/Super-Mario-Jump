const mario = document.querySelector('.image__mario')
const tunnel = document.querySelector('.image__tunnel')
const msgGameOver =  document.getElementById('#gameover')

const jump = () => {
    mario.classList.add('jump--animation');

    setTimeout(() => {
        mario.classList.remove('jump--animation');
    }, 1500)
}
const loop = setInterval(() => {
    const tunnelPosition = tunnel.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '')

    if (tunnelPosition <= 120 && tunnelPosition > 0  && marioPosition < 100 ) {
        tunnel.style.animation = 'none'
        tunnel.style.left = `${tunnelPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        msgGameOver.innerHTML = 'GAME OVER'

        clearInterval(loop)
    
    }
} , 10)

document.addEventListener('keypress' , jump) 
