//parametros de função:

function soma(num1, num2) {
    return num1 + num2;
};

// console.log(soma(2, 4));


function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40, 'juliana'));


function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(2, 3)));

