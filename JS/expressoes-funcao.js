//forma declarativa

function minhaFuncao(param) {
    console.log(param);
}

minhaFuncao('Sou uma function');

//expressão

const soma = function(num1 = 1, num2 = 2) {return num1 + num2}

console.log(soma(1, 2));