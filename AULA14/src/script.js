//Definindo uma Array global
const times = ["São Paulo", "Vasco", "Flamengo", "Palmeiras"];

//Utilizando o método indexOf()
let posicaoItem = times.indexOf("Flamengo");

console.log(times);
console.log(posicaoItem);

//Utilizando o lastIndexOf()
const times2 = ["São Paulo", "Corinthians", "São Paulo", "Flamengo"];

let posicaoItem2 = times2.lastIndexOf("São Paulo");

console.log(times2);
console.log(posicaoItem2);

//Utilizando o método includes()
let verificaExistenciaItem = times.includes("Corinthians");

console.log(verificaExistenciaItem);

//Utilizando o método find()
const number = [4, 6, 73, 58, 2, 17];
let encontrarMaior = number.find(verificaValor);

function verificaValor(valor){
    return valor > 50;
}

console.log(encontrarMaior);

//Utilozando o método findIndex()
let encontrarIndice = number.findIndex(verificaValor);
console.log(encontrarIndice);

//Utilizando o método findlast()
let encontrarMaiorFinal = number.findLast((x) => x > 50);
console.log(encontrarMaiorFinal);

//Utilizando o método findLastIndex()
let encontrarIndiceMaiorFinal = number.findLastIndex ((valor) => valor > 50);
console.log(encontrarIndiceMaiorFinal);