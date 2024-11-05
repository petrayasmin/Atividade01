let anoNasc = prompt("Digite seu ano de nascimento: ")

function calculateAge(){
const anoAtual = new Date(Date.now().getFullYear());
return anoAtual - anoNasc;
}