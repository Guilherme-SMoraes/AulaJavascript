let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A
console.log(a, b, c);
[a, b, c] = [b, c, a]; // isso é associação via desestruturação
console.log(a, b, c);
// =================================================================
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, , segundoNumero, terceiroNumero, ...resto] = numeros;
console.log('3 números', primeiroNumero, segundoNumero, terceiroNumero);
console.log('Resto:', resto);
