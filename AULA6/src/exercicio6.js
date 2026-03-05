//Exercicio 6: Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.

alert("Área de Retangulo");

let base = parseFloat(prompt("Informe o valor da base do retãngulo: "));
let altura = parseFloat(prompt("Informe o valor da altura do retangulo: "));

let areaRetangulo = (base * altura);

alert(`O valor da área do retangulo de base ${base} e altura ${altura} é: ${areaRetangulo} m²`);