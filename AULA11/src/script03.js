//Utilizando o this

function teste(){
    return console.log(this);
}

teste();

const carro = {
    marca: "Bugatti",
    modelo: "Veyron",
    cor: "Preto",
}

let carroArray = Object.values(carro);

let cArrayString = carroArray.toString();

console.log(cArrayString);