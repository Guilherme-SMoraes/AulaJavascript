// Some todos os números (reduce) <- Usar só para essa forma
// Retorne um array com os pares (filter) <- Evitar usar dessa forma, usar a função especifica para isso
// Retorne uma array com o dobro dos valores (map) <- Evitar usar dessa forma, usar a função especifica para isso
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((total, x) => total + x);
console.log(total);
const numerosPares = numeros.reduce((acc, curr) => {
	if (curr % 2 === 0) acc.push(curr);
	return acc;
}, []);
console.log(numerosPares);
const numerosDobrados = numeros.reduce((acc, curr) => {
	acc.push(curr * 2);
	return acc;
}, []);
console.log(numerosDobrados);

// Retorne a pessoa mais velha
const pessoas = [
	{ nome: 'Luiz', idade: 62 },
	{ nome: 'Maria', idade: 23 },
	{ nome: 'Eduardo', idade: 55 },
	{ nome: 'Letícia', idade: 19 },
	{ nome: 'Rosana', idade: 64 },
	{ nome: 'Wallace', idade: 63 },
];
const pessoaMaisVelha = pessoas.reduce((acc, curr) => (acc.idade > curr.idade ? acc : curr));
console.log(pessoaMaisVelha);
