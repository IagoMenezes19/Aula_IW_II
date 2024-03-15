var resul = document.getElementById('resul')

function altura(valor) {
    document.getElementById('valoralt').innerText = valor;
}

function peso(valor) {
    document.getElementById('valorpeso').innerText = valor;
}

function Calc(){

    var sexo = document.getElementById('sexo').value
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)
    var Calc = peso / (altura * altura)

    resul.innerHTML = Calc;

    if (sexo === 'masculino') {
        if (Calc < 20) {
            resul.innerHTML = 'Abaixo do peso';
        } else if (Calc >= 20 && Calc < 25) {
            resul.innerHTML = 'Normal';
        } else if (Calc >= 25 && Calc < 30) {
            resul.innerHTML = 'Sobrepeso';
        } else if (Calc >= 30 && Calc < 35) {
            resul.innerHTML = 'Obesidade grau I';
        } else if (Calc >= 40) {
            resul.innerHTML = 'Obesidade grau III';
        } else {
            resul.innerHTML = 'Obesidade grau II';
        }
    } else {
        if (Calc < 19) {
            resul.innerHTML = 'Abaixo do peso';
        } else if (Calc >= 19 && Calc < 24) {
            resul.innerHTML = 'Normal';
        } else if (Calc >= 24 && Calc < 29) {
            resul.innerHTML = 'Sobrepeso';
        } else if (Calc >= 29 && Calc < 34) {
            resul.innerHTML = 'Obesidade grau I';
        } else if (Calc >= 39) {
            resul.innerHTML = 'Obesidade grau III';
        } else {
            resul.innerHTML = 'Obesidade grau II';
        }
    }

}