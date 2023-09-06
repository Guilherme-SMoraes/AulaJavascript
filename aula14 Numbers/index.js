let num1 = 1500;
let num2 = 2.51861658;

console.log(num1.toString() + num2); // Concatena 2 números
console.log(num1.toString(2)); // Transforma numero em binários
console.log(num2.toFixed(2)); // Arredonda decimais
console.log(Number.isInteger(num1)); // Verifica se é inteiro
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));

num1 = 0.7;
num2 = 0.1;
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0
console.log(num1);

num1 = Number(num1.toFixed(2));
console.log(num1);
