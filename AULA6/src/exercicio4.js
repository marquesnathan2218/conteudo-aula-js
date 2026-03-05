//Exercicio 4: O usuario vai informar valores e será efetuado sua divisão.

alert("Divisão");
let valor1 = parseFloat(prompt("Informe o primeiro valor: "));
let valor2 = parseFloat(prompt("Informe o segundo valor: "));

let resultado;

alert("O resultado da divisão é: " + resultado);

if (valor1 === 0){
alert("Não é possivel dividir por zero! Tente novamente.");
}else{
    resultado = (valor1 / valor2);
}