var resultado = document.getElementById('resultado')

function peganumero1(){
    var prinumber = document.getElementById ('prinumber').value
    console.log('Primeiro numero: ', prinumber)
}

function peganumero2(){
    var segnumber = document.getElementById ('prinumber').value
    console.log('Primeiro numero: ', segnumber)
}

function soma(){
    var prinumber = parseInt(document.getElementById('prinumber').value)
    var segnumber = parseInt(document.getElementById('segnumber').value)
    var soma = prinumber + segnumber
    console.log('soma: ', soma)
    resultado.innerHTML = soma
}
