const mario = document.querySelector('.image__mario')


const jump = () => {
    mario.classList.add('jump--animation');

    setTimeout(() => {
        mario.classList.remove('jump--animation');
    }, 500)
}

document.addEventListener('keydown' , jump)