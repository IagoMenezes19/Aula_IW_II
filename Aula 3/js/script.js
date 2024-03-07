var result = document.getElementById('resultado')

function peganumero1(){

    var n1 = Number(document.getElementById('n1').value) 
    console.log('n1:  ', n1)

}

function peganumero2(){

    var n2 = Number(document.getElementById('n2').value)
    console.log('n2:  ', n2)
   

}

function soma(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var soma = n1 + n2
    result.innerHTML = soma
    console.log ('Soma: ' , soma)

}

function sub(){

    var n1 = Number(document.getElementById('n1').value) 
    var n2 = Number(document.getElementById('n2').value)
    var sub = n1 - n2
    result.innerHTML = sub
    console.log ('sub: ' , sub)


}

function mult(){

    var n1 = Number(document.getElementById('n1').value) 
    var n2 = Number(document.getElementById('n2').value)
    var mult = n1 * n2
    result.innerHTML = mult
    console.log ('mult: ' , mult)


}

function divi(){

    var n1 = Number(document.getElementById('n1').value) 
    var n2 = Number(document.getElementById('n2').value)
    var divi = n1 / n2
    result.innerHTML = divi
    console.log ('divi: ' , divi)    


}

function limp(){
    result.innerHTML = " "
    numero1.innerHTML = ' '
    numero2.innerHTML = ' '

}