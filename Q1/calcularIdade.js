function calculateAge(anoNasc){
const anoAtual = new Date().getFullYear();
return anoAtual - anoNasc;
}

module.exports = {
    calculateAge
};
