/* Animação escrever */
const nome = document.querySelector('#nome');
const sobre = document.querySelector ('#sobre');

function writer(nome, sobre){
    const textArrayName = nome.innerHTML.split('');
    const textArrayAbout = sobre.innerHTML.split('');
    nome.innerHTML = ''
    sobre.innerHTML = ''

    textArrayName.forEach((letra, i) => {
        setTimeout(() => nome.innerHTML += letra, 75*i);
    });

    textArrayAbout.forEach((letra, i) => {
        setTimeout(() => {
            setTimeout(() => sobre.innerHTML += letra, 75*i);
        }, 3450);
    });
}
writer(nome, sobre);

/* Carregar elementos com scroll */

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context,args);
    }
}

const element = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    element.forEach( e => {
        if (windowTop > e.offsetTop){
            e.classList.add(animationClass)
        }else {
            e.classList.remove(animationClass)
        }
    });
}

animeScroll()

window.addEventListener('scroll', debounce(function(){
    animeScroll();
}, 100));