function Pessoa(primeironNome, ultimoNome, idade, pais){
    this.primeironNome = primeironNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
    this.pais = pais;
}

const euMesmo = new Pessoa("Nathan", "Marques Alves", 18, "Brasil");

const meuIrmao = new Pessoa("Pietro", "Marques", 5, "Brasil");

// console.log(euMesmo);
// console.log(meuIrmao);

//Reforçando criação de construtores de objetos
function Veiculo(marca, modelo, motorPotencia, cor, ano, rodas){
    this.marca = marca;
    this.modelo = modelo;
    this.motorPotencia = motorPotencia;
    this.cor = cor;
    this.ano = ano;
    this.rodas = rodas;
    this.acelerar = function(){
        return this.modelo + " acelerou";
    };
}

const minhaMoto = new Veiculo("Honda", "CB 300", "200cv", "Vermelha", 2013, 2);

console.log(minhaMoto);

const meuCarro = new Veiculo("Porsche", "911 GTS", "541cv", "Cinza", 2025, 4);

console.log(meuCarro);

meuCarro.placa = "12345";

meuCarro.frear = function(){
    return this.modelo + " freou"
};

console.log(meuCarro.frear());

console.log(meuCarro.placa)

Veiculo.prototype.parar = function(){
    return this.marca + " parou"
}

console.log(meuCarro.parar());