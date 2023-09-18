// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter((x) => x > 10);
console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoa com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
	{ nome: 'Luiz', idade: 62 },
	{ nome: 'Maria', idade: 23 },
	{ nome: 'Eduardo', idade: 55 },
	{ nome: 'Letícia', idade: 19 },
	{ nome: 'Rosana', idade: 32 },
	{ nome: 'Wallace', idade: 47 },
];
const pessoasNomeMais5Letras = pessoas.filter((x) => x.nome.length >= 5);
console.log(pessoasNomeMais5Letras);
const pessoasComMaisDe50Anos = pessoas.filter((x) => x.idade > 50);
console.log(pessoasComMaisDe50Anos);
const pessoasComANoFinalDoNome = pessoas.filter((x) => x.nome.toLowerCase().endsWith('a'));
console.log(pessoasComANoFinalDoNome);
