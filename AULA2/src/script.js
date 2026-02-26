//Exemplos de operador de atribuição
let x = 100;

x = x - 5;
//console.log(x);

x = x + 5;
//console.log(x);

//Exemplos de Aritmetica em JavaScript
let soma = 5 + 5 + 4;
//console.log(soma);

//const primeiroNome = 'Nathan';
//const ultimoNome = ' Marques';

let nomeCompleto = 'Nathan' + " " +'Marques';

//console.log(nomeCompleto);

//Exemplos de tipos de JavaScript
//String 
let cor = 'Verde';
let fruta = 'Uva';
console.log(cor);
console.log(fruta);

//Number

let soma1 = 5 + 5;
let subtracao = 10 - 3;
console.log(soma1);
console.log(subtracao);

//BigInt
let bigint = 1234567890123456789012345n;
let bigint2 = BigInt(1234567890123456789012345);
console.log(bigint);
console.log(bigint2);

//Boolean
let valorVerdadeiro = true;
let valorFalso = false;
console.log(valorVerdadeiro);
console.log(valorFalso);

//Object
const carro = {
    marca: 'Ferrari',
    modelo: '458 Italia',
    cor: 'Vermelho',
}

console.log(carro);
console.log('A marca do carro do carro é: ' + carro.marca);


//Array
const frutas = ['Pera', 'Maçã', 'Limão',
    'Morango', 'Abacaxi'];

    console.log(frutas);

//Date Object
const data = new Date;

console.log(data);

//Undefined
let indefinido;

console.log(indefinido);

//Null
let nulo = null;

console.log(nulo);

//Symbol
let N = Symbol();

console.log(N);

//Exemplos de typeof
let stringTipo = "300";
let numberTipo = 300;

//const tipoDado = typeof stringTipo;
const tipoDado = typeof numberTipo;

console.log(tipoDado);

//Exemplos de Boolean
let cinco = 5;
let comparacao = cinco == 8;

console.log(comparacao);