let titulo = document.querySelector('h1')
titulo.innerHTML = 'Aula Manipular CSS'
let image = document.querySelector('#foto')
image.setAttribute('src', 'img/goku-black.png')
image.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "white";
titulo.style.color = "white";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "10px solid green";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "20px";

//let box = document.querySelectorAll('.box')
//box[0].setAttribute('class', 'escura')
//box[0].removeAttribute('class')



/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnRosa = document.querySelector('#btrosa')

let btnAmarelo = document.querySelector('#btamarelo')

let btnAzul = document.querySelector('#btazul')


btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnRosa.addEventListener('click', modoRosa)
btnAmarelo.addEventListener('click', modoAmarelo)
btnAzul.addEventListener('click', modoAzul)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.remove("light");
    tela.classList.remove("rosa");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.add("dark");
    image.setAttribute('src', 'img/goku-black.png')
    image.setAttribute('width', '280px')
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("rosa");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.add("light");
    image.setAttribute('src', 'img/goku-black.png')
    image.setAttribute('width', '280px')
}

function modoRosa() {
    //event.preventDefault();
    console.log('modo rosa')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.add("rosa");
    image.setAttribute('src', 'img/goku-rose.png')
    image.setAttribute('width', '280px')
}

function modoAmarelo() {
    //event.preventDefault();
    console.log('Super Sayajin')
    tela.classList.remove("light");
    tela.classList.remove("rosa");
    tela.classList.remove("dark");
    tela.classList.remove("azul");
    tela.classList.add("amarelo");
    image.setAttribute('src', 'img/goku-black.png')
    image.setAttribute('width', '280px')
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/
