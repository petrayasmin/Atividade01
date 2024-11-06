const prompt = require("prompt-sync")();
const calcularIdade = require('./calcularIdade.js');


const anoNasc = parseInt(prompt("Digite ano de nascimento: "));

console.log("Sua idade: ", calcularIdade.calculateAge(anoNasc));