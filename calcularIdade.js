const anoNasc = prompt("Digite seu ano de nascimento: ")

function calculateAge(anoAtual, anoNasc){
const anoAtual = new Date(Date.now().getFullYear());
return anoAtual - anoNasc;
}

module.exports = {
    anoNasc,
    calculateAge,
};
