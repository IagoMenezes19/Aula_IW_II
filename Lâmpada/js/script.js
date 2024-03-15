const On = document.getElementById ('On')
const Off = document.getElementById ('Off')
const lamp = document.getElementById ('lamp')
const Restaurar = document.getElementById ('Restaurar')
const OnOff = document.getElementById ('OnOff')

function verBrk () {
    return lamp.src.indexOf ('quebrada') > -1
}//ve se a lâmpada está quebrada

function verOn () {
    return lamp.src.indexOf ('desligada') > -1
}//ve se a lâmpada está ligada

function rst () {
    if (verBrk()){
    lamp.src = "img/desligada.jpg"
    }
}//restaura a lâmpada

function lampOn () {
    if (!verBrk ()){
        lamp.src = "img/ligada.jpg"
    }
}//(!) significa não e if significa se

function lampOff () {
    if (!verBrk ()){
        lamp.src = "img/desligada.jpg"
    }
}//desliga a lâmpada

function Interruptor () {
    if (!verBrk()) {
        if (verOn()){
            lamp.src = "img/ligada.jpg"
        }
        else{
            lamp.src = "img/desligada.jpg"
        }
    }
}//liga e desliga a lâmpada

function lampBrk () {
    lamp.src = "img/quebrada.jpg"
}//quebra a lâmpada

On.addEventListener ('click', lampOn)
Off.addEventListener ('click', lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBrk)
Restaurar.addEventListener ('click', rst)
OnOff.addEventListener ('click', Interruptor)