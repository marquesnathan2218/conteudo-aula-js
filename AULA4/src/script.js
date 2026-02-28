//Exemplo de Condição de lógica: if e else

//Exemplo de Condição Lógica: If Else If
let y = 2;

if (y > 3) {
    console.log('A variavel y é maior que 3!');
}else if (y == 3){
    //console.log(' a variavel y é igual a 3');
}else{
    //console.log('A variavel y possui um valor diferente das variações');
}

// Exemplo de if
const elemento =  document.getElementById('ex1');
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora= String(pegarHoras) + ":" + String(pegarMinutos);

if (pegarHoras > 18) {
    elemento.innerHTML = "Boa Noite!";
}

//Exemplo if 2
let idade = 18;
let texto = 'Voce é novo demais para dirigir';

if (idade >= 18){
    texto = 'Voce tem idade para dirigir';
}

document.getElementById('idade').innerHTML = 'Sua idade é: ' + idade;
document.getElementById('ex2').innerHTML = texto;

//Exemplo If Alinhado
let idade2 = 16;
let pais = 'Estados Unidos';
let mensagem = 'Voce não pode dirigir';

//if (pais == 'Brasil'){
   // if (idade2 >= 16){
  //      mensagem = 'Voce pode dirigir';
   // }
//}

//document.getElementById('ex3').innerHTML = mensagem;

//Exemplo de If Alinhado com operador AND (&&)
let idade3 = 16;
let pais2 = 'Estados Unidos';
let mensagem2 = 'Voce não pode dirigir';

if ((pais2 == 'Brasil') && (idade3 == 16)){
    mensagem2 = 'Voce pode dirigir'
}

document.getElementById('ex3').innerHTML = mensagem2;