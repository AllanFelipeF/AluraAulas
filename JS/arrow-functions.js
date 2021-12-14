//funcao normal
function apresentar(nome) {
    return `Meu nome é ${nome}`
}


//arrow function

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

const somarNumerosPequenos = (num1, num2) => {
    if((num1 > 0 && num1 < 10) && (num2 > 0 && num2 < 10)) {
        return num1 + num2;
    } else {
        return 'Somente numeros de 1 a 9'
    }
}
console.log(somarNumerosPequenos(10, 20));
console.log(somarNumerosPequenos(6, 5));