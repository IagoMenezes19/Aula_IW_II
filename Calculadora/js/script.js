var n1 = document.getElementById('n1');//denominei a variavel n1 = número 1
var n2 = document.getElementById('n2');//denominei a variavel n2 = número 2
var resul = document.getElementById('resul');//denominei a variavel resul = resultado

function ad () {
    resul.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
}

function sb () {
    resul.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);
}

function mt () {
    resul.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
}

function dv () {
    if (n2.value == '0'){
    resul.innerHTML = "ERRO"
    }    
    else {
    resul.innerHTML = parseFloat(n1.value) / parseFloat(n2.value);
    }
}

function lp () {
    n1.value = ""
    n2.value = ""
    resul.innerHTML = ""
}