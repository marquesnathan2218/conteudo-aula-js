//Criando meu primeiro objeto
const carro = { marca: "Ferrari", modelo: "458", ano: 2009, cor: "Vermelha" } 

console.log(carro.cor);

//Exemplo 2 de criação de objeto
const carro2 = {
    marca: "Lamborguini",
    modelo: "Aventador",
    ano: 2011,
    cor: "Amarelo",
}

console.log(carro2);

//Exemplo 3 de criação de objeto
const carro3 = {};

carro3.marca = "Chevrolet";
carro3.modelo = "Opala Diplomata";
carro3.ano = 1979;
carro3.cor = "Preto";

console.log(carro3["modelo"]);

//Exemplo 4 de criação de objeto
const carro4 = new Object({
    marca: "Toyota",
    modelo: "Corolla",
    ano: "2015",
    cor: "Cinza",
    acelerar: function () {
        return this.modelo + " acelerou ";
    },
});

console.log(carro4.acelerar());