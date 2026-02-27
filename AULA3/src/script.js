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
