//Criação de métodos 
const casa ={
    portas: 4,
    janelas: 5,
    telhado: true,
    laje: true,
    pets:{
        cachorro: {
            nome: "Bella",
            raca: "Chow-Chow",
            latir: function (){
                return this.nome + " Latiu: Au Au";
            }
        },
    },
}

console.log(casa.pets.cachorro.latir());

