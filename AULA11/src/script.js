//Utilizando o operador in
const pessoa = {
    primeironNome: "Nathan",
    ultimoNome: "Marques Alves",
    idade: 18,
    pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

//Criação de objetos alinhados

const pessoa2 = {
    primeironNome: "Pietro",
    segundoNome: "Marques",
    carros:{
        carro1: "Ferrari",
        carro2: "Mitsubishi",
        carro3: "Audi",
    },
    motos:{
        moto1: "Honda",
        moto2: "Royal Enfield",
    },
}

let moto1 = "moto1";

console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"] ["carro1"]);
console.log(pessoa2.motos[moto1]);