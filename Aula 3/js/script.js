var resultado = document.getElementById('resultado')

function peganumero1(){
    var prinumber = document.getElementById ('prinumber').value
    console.log('Primeiro numero: ', prinumber)
}

function peganumero2(){
    var segunumber = document.getElementById ('prinumber').value
    console.log('Primeiro numero: ', segunumber)
}

function soma(){
    var prinumber = parseInt(document.getElementById('prinumber').value)
    var segunumber = parseInt(document.getElementById('segnumber').value)
    var soma = prinumber + segunumber
    console.log('soma: ', soma)
    resultado.innerHTML = soma
}
