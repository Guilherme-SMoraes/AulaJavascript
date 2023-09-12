/**
 * Luiz Otávio Miranda tem 30 anos, pesa 84 kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924
 * Luiz Otávio nasceu em 1980
 */
const nome = 'Guilherme';
const sobrenome = 'Moraes';
const idade = 23;
const pesoEmKilos = 90;
const alturaEmMetros = 1.75;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = pesoEmKilos / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${pesoEmKilos} kg`);
console.log(`tem ${alturaEmMetros} de algura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
