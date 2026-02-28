// //  Exemplo de If Else
// const hora = 18;new Date().getHours();
// const minutos = new Date().getMinutes();
// const horario = String(hora) + ':' + String(minutos);
// let saudacao = 'Bom Dia';

// if (hora > 18){
//     saudacao = 'Boa Noite';
// }else{
//     saudacao = 'Bom Dia';
// }

// document.getElementById('ex1').innerHTML = saudacao;
// //document.getElementById('ex2').innerHTML = 'Agora são: ' + horario;
// document.getElementById('ex2').innerHTML = `Agora são:  ${horario}`;

//Exemplo If Else If
const hora = 7;
const minutos = new Date().getMinutes();
const horario = String(hora) + ':' + String(minutos);
let saudacao = 'Bom Dia';

if (hora > 18){
    saudacao = 'Boa Noite';
}else if(hora > 12){
    saudacao = 'Bom Dia';
}else{
    saudacao = 'Bom Dia';
}

document.getElementById('ex1').innerHTML = saudacao;
//document.getElementById('ex2').innerHTML = 'Agora são: ' + horario;
document.getElementById('ex2').innerHTML = `Agora são:  ${horario}`;



