//Alterando atributo
const elemento = document.querySelector(".ex1");

elemento.src = "Trollface.png";
elemento.width = 400;

//Conteúdo dinamico (data)
const elemento2 = document.querySelector("#ex2");

console.log(elemento2);

elemento2.innerHTML = "Data atual: " + Date();