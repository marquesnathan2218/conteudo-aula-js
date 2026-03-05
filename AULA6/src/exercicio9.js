//Exercicio 8: Escreva um algoritmo para ler as dimensões de um triangulo(base e altura), calcular e escrever a área do triangulo.

alert("Trapézio");
let B = parseFloat(prompt("Informe o valor da base maior do trapézio"));
let b = parseFloat(prompt("Informe o valor de base menor"));
let altura = parseFloat(prompt("Informe o valor da altura do trapéio"));

let resultado = ((B + b) * altura) /2;

alert("O resultado do trapezio é:" + resultado);



