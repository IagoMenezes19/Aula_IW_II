const lamp = document.getElementById('lamp')
const restaurar = document.getElementById('restaurar')
const botao = document.getElementById('botao')

function verbrk()
{
    return lamp.src.indexOf('quebrada') > -1
}

function verlgd(){
    return lamp.src.indexOf('desligada') > -1
}

function rst(){
    if (verbrk()){
        lamp.src = "img/desligada.jpg"
    }
}

restaurar.addEventListener('click', rst)

function on(){
    if (!verbrk()){
        lamp.src = "img/ligada.jpg"
    }
}
lamp.addEventListener('mouseover', on)

function off(){
    if (!verbrk()){
        lamp.src = "img/desligada.jpg"
    }
}
lamp.addEventListener('mouseleave', off)

function onoff(){
    if (!verbrk()){
        if(verlgd()){
            lamp.src = "img/ligada.jpg"
        }
        else{
            lamp.src = "img/desligada.jpg"
        }
    }
}

function brk(){
    lamp.src = "img/quebrada.jpg"
}

lamp.addEventListener('dblclick', brk)
botao.addEventListener('click', onoff)
